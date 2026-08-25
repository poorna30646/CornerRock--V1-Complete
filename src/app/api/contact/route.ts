import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { contactFormSchema } from "@/lib/validations";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/contact";
import {
  sendCompanyNotificationEmail,
  sendClientConfirmationEmail,
} from "@/lib/email";

export const runtime = "nodejs";

function getSafeErrorMetadata(error: unknown) {
  if (!error || typeof error !== "object") {
    return { errorName: "UnknownError" };
  }

  const { name, code } = error as { name?: unknown; code?: unknown };
  const metadata: { errorName: string; code?: string | number } = {
    errorName: typeof name === "string" ? name : "UnknownError",
  };

  if (typeof code === "string" || typeof code === "number") {
    metadata.code = code;
  }

  return metadata;
}

export async function POST(request: NextRequest) {
  const requestId = randomUUID();

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    console.warn("[contact] Invalid JSON request body.", { requestId });
    return NextResponse.json(
      {
        success: false,
        message: "Please submit a valid contact form.",
      },
      { status: 400 }
    );
  }

  try {
    console.info("[contact] Processing contact submission.", { requestId });

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      console.warn("[contact] Contact validation failed.", {
        requestId,
        invalidFields: result.error.issues
          .map((issue) => issue.path.join("."))
          .filter(Boolean),
      });
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields and try again.",
          errors: result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const validatedData = result.data;
    console.info("[contact] Contact payload validated.", { requestId });

    try {
      console.info("[contact] Saving contact document.", { requestId });
      await connectToDatabase();

      const contact = new Contact(validatedData);
      await contact.save();
      console.info("[contact] Contact document saved.", { requestId });
    } catch (databaseError) {
      console.error("[contact] Contact database save failed.", {
        requestId,
        ...getSafeErrorMetadata(databaseError),
      });
      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your inquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    try {
      console.info("[contact] Sending company notification email.", {
        requestId,
      });
      await sendCompanyNotificationEmail(validatedData);
      console.info("[contact] Sending client confirmation email.", {
        requestId,
      });
      await sendClientConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
      });
      console.info("[contact] Contact emails sent.", { requestId });
    } catch (emailError) {
      console.error("[contact] Contact email delivery failed after save.", {
        requestId,
        ...getSafeErrorMetadata(emailError),
      });
      return NextResponse.json(
        {
          success: false,
          message:
            "Your inquiry was received, but we could not complete the email confirmation. Please try again later or contact us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your inquiry. Our team will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact] Unexpected contact submission failure.", {
      requestId,
      ...getSafeErrorMetadata(error),
    });
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
