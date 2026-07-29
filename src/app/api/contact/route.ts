import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/contact";
import {
  sendCompanyNotificationEmail,
  sendClientConfirmationEmail,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the data with Zod
    const validatedData = contactFormSchema.parse(body);

    // Connect to MongoDB
    await connectToDatabase();

    // Save to database
    const contact = new Contact(validatedData);
    await contact.save();

    // Send company notification email
    try {
      await sendCompanyNotificationEmail(validatedData);
    } catch (emailError) {
      console.error("Company email failed:", emailError);
      // Don't fail the whole request if email fails
    }

    // Send client confirmation email
    try {
      await sendClientConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
      });
    } catch (emailError) {
      console.error("Client email failed:", emailError);
      // Don't fail the whole request if email fails
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
    // Handle Zod validation errors
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        const zodError = error as unknown as {
          errors: Array<{ path: string; message: string }>;
        };
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed",
            errors: zodError.errors,
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        {
          success: false,
          message: error.message,
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
