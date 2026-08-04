import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/contact";
import {
  sendCompanyNotificationEmail,
  sendClientConfirmationEmail,
} from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    console.log("[contact] Received new contact submission request.");

    const body = await request.json();
    console.log("[contact] Request body received:", {
      name: body?.name,
      email: body?.email,
      company: body?.company,
      service: body?.service,
    });

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      console.error("[contact] Validation failed:", result.error.issues);
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.issues,
        },
        { status: 400 }
      );
    }

    const validatedData = result.data;
    console.log("[contact] Payload validated successfully.");

    try {
      console.log("[contact] Connecting to MongoDB before saving the contact...");
      await connectToDatabase();

      console.log("[contact] Saving contact to MongoDB...");
      const contact = new Contact(validatedData);
      await contact.save();
      console.log("[contact] Contact saved successfully.");
    } catch (databaseError) {
      console.error("[contact] Contact database save failed with full error:", databaseError);
      return NextResponse.json(
        {
          success: false,
          message:
            databaseError instanceof Error
              ? databaseError.message
              : "Unable to save your inquiry. Please try again later.",
          error: databaseError,
        },
        { status: 500 }
      );
    }

    try {
      console.log("[contact] Sending company notification email...");
      await sendCompanyNotificationEmail(validatedData);
      console.log("[contact] Sending client confirmation email...");
      await sendClientConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
      });
      console.log("[contact] Emails sent successfully.");
    } catch (emailError) {
      console.error("[contact] Contact email failed with full error:", emailError);
      return NextResponse.json(
        {
          success: false,
          message:
            emailError instanceof Error
              ? emailError.message
              : "Your inquiry was saved, but email notification failed.",
          error: emailError,
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
    console.error("[contact] Unexpected contact submission failure:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
        error,
      },
      { status: 500 }
    );
  }
}
