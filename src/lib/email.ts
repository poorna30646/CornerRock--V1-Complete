import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

function getRequiredEmailConfig() {
  console.log("[email] Checking email environment configuration...");
  const {
    SMTP_HOST,
    SMTP_PORT = "587",
    SMTP_USER,
    SMTP_PASSWORD,
    COMPANY_NOTIFICATION_EMAIL,
  } = process.env;

  console.log("[email] SMTP host configured:", Boolean(SMTP_HOST));
  console.log("[email] SMTP user configured:", Boolean(SMTP_USER));
  console.log("[email] SMTP password configured:", Boolean(SMTP_PASSWORD));
  console.log("[email] Notification email configured:", Boolean(COMPANY_NOTIFICATION_EMAIL));

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !COMPANY_NOTIFICATION_EMAIL) {
    const error = new Error("SMTP environment variables are not configured");
    console.error("[email] Missing SMTP environment variables:", error);
    throw error;
  }

  return {
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    user: SMTP_USER,
    password: SMTP_PASSWORD,
    companyNotificationEmail: COMPANY_NOTIFICATION_EMAIL,
  };
}

function createTransporter() {
  const config = getRequiredEmailConfig();

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
  } satisfies SMTPTransport.Options);
}

export function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD &&
      process.env.COMPANY_NOTIFICATION_EMAIL
  );
}

/**
 * Send a notification email to the company when a new lead is received
 */
export async function sendCompanyNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}) {
  if (!isEmailConfigured()) {
    return { success: true, skipped: true };
  }

  console.log("[email] Preparing company notification email for:", data.email);
  const subject = `New Lead Received: ${data.company}`;

  const htmlContent = `
    <h2>New Lead Received</h2>
    <p>A new inquiry has been submitted through your website.</p>
    
    <h3>Contact Information</h3>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Company:</strong> ${data.company}</li>
    </ul>
    
    <h3>Project Details</h3>
    <ul>
      <li><strong>Service Interested:</strong> ${data.service}</li>
      <li><strong>Budget:</strong> ${data.budget}</li>
      <li><strong>Timeline:</strong> ${data.timeline}</li>
    </ul>
    
    <h3>Message</h3>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
    
    <hr>
    <p><em>Please reach out to this lead within 24 hours.</em></p>
  `;

  try {
    const transporter = createTransporter();
    const config = getRequiredEmailConfig();

    console.log("[email] Sending company notification email...");
    await transporter.sendMail({
      from: config.user,
      to: config.companyNotificationEmail,
      subject,
      html: htmlContent,
      replyTo: data.email,
    });
    console.log("[email] Company notification email sent successfully.");
    return { success: true };
  } catch (error) {
    console.error("[email] Failed to send company notification with full error:", error);
    throw error;
  }
}

/**
 * Send a confirmation email to the user/client
 */
export async function sendClientConfirmationEmail(data: {
  name: string;
  email: string;
  service: string;
}) {
  if (!isEmailConfigured()) {
    return { success: true, skipped: true };
  }

  console.log("[email] Preparing client confirmation email for:", data.email);
  const subject = `Thank you for contacting Corner Rock`;

  const htmlContent = `
    <h2>Thank You for Reaching Out!</h2>
    
    <p>Hello ${data.name},</p>
    
    <p>Thank you for contacting <strong>Corner Rock</strong>. We have received your inquiry regarding <strong>${data.service}</strong>.</p>
    
    <p>Our team is reviewing your requirements and will contact you shortly with next steps and a detailed proposal.</p>
    
    <h3>What Happens Next?</h3>
    <ol>
      <li>Our team reviews your project details (within 24 hours)</li>
      <li>We schedule a discovery call to understand your goals better</li>
      <li>You receive a detailed proposal with timeline and cost</li>
      <li>We start building your product</li>
    </ol>
    
    <p>If you have any questions in the meantime, feel free to reply to this email or call us.</p>
    
    <hr>
    <p>Best regards,<br>
    <strong>The Corner Rock Team</strong><br>
    Building Software That Grows Businesses.<br>
    </p>
  `;

  try {
    const transporter = createTransporter();
    const config = getRequiredEmailConfig();

    console.log("[email] Sending client confirmation email...");
    await transporter.sendMail({
      from: config.user,
      to: data.email,
      subject,
      html: htmlContent,
    });
    console.log("[email] Client confirmation email sent successfully.");
    return { success: true };
  } catch (error) {
    console.error("[email] Failed to send client confirmation with full error:", error);
    throw error;
  }
}
