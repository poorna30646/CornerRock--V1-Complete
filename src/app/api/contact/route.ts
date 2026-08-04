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
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
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

    try {
      await connectToDatabase();

      const contact = new Contact(validatedData);
      await contact.save();
    } catch (databaseError) {
      console.error("Contact database save failed:", databaseError);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to save your inquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    try {
      await sendCompanyNotificationEmail(validatedData);
      await sendClientConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
      });
    } catch (emailError) {
      console.error("Contact email failed:", emailError);
      return NextResponse.json(
        {
          success: false,
          message: "Your inquiry was saved, but email notification failed.",
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
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your inquiry right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
