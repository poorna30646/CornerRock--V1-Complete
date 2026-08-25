import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  companyNotificationEmail: string;
}

function parseSmtpPort(value: string | undefined): number | null {
  if (value === undefined) {
    return null;
  }

  const rawPort = value.trim();

  if (!/^\d+$/.test(rawPort)) {
    return null;
  }

  const port = Number(rawPort);
  return Number.isInteger(port) && port >= 1 && port <= 65535 ? port : null;
}

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

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

function escapeHtmlWithLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function getRequiredEmailConfig(): EmailConfig {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;
  const companyNotificationEmail = process.env.COMPANY_NOTIFICATION_EMAIL?.trim();
  const port = parseSmtpPort(process.env.SMTP_PORT);
  const hasRequiredVariables = Boolean(host && user && password && companyNotificationEmail);

  console.info("[email] SMTP configuration present:", hasRequiredVariables);

  if (!hasRequiredVariables) {
    console.error("[email] Required SMTP environment variables are not configured.");
    throw new Error("SMTP environment variables are not configured");
  }

  if (port === null) {
    console.error("[email] SMTP_PORT is invalid.");
    throw new Error("SMTP_PORT must be a valid TCP port");
  }

  if (!host || !user || !password || !companyNotificationEmail) {
    throw new Error("SMTP environment variables are not configured");
  }

  return {
    host,
    port,
    user,
    password,
    companyNotificationEmail,
  };
}

function createTransporter(config: EmailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 30000,
  } satisfies SMTPTransport.Options);
}

export function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASSWORD &&
      process.env.COMPANY_NOTIFICATION_EMAIL?.trim() &&
      parseSmtpPort(process.env.SMTP_PORT) !== null
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
  const config = getRequiredEmailConfig();
  const subject = `New Lead Received: ${sanitizeHeaderValue(data.company)}`;

  const htmlContent = `
    <h2>New Lead Received</h2>
    <p>A new inquiry has been submitted through your website.</p>
    
    <h3>Contact Information</h3>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Phone:</strong> ${escapeHtml(data.phone)}</li>
      <li><strong>Company:</strong> ${escapeHtml(data.company)}</li>
    </ul>
    
    <h3>Project Details</h3>
    <ul>
      <li><strong>Service Interested:</strong> ${escapeHtml(data.service)}</li>
      <li><strong>Budget:</strong> ${escapeHtml(data.budget)}</li>
      <li><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</li>
    </ul>
    
    <h3>Message</h3>
    <p>${escapeHtmlWithLineBreaks(data.message)}</p>
    
    <hr>
    <p><em>Please reach out to this lead within 24 hours.</em></p>
  `;

  try {
    const transporter = createTransporter(config);

    console.info("[email] Sending company notification email.");
    await transporter.sendMail({
      from: config.user,
      to: config.companyNotificationEmail,
      subject,
      html: htmlContent,
      replyTo: data.email,
    });
    console.info("[email] Company notification email sent.");
    return { success: true };
  } catch (error) {
    console.error(
      "[email] Company notification email failed.",
      getSafeErrorMetadata(error)
    );
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
  const config = getRequiredEmailConfig();
  const subject = "Thank you for contacting Corner Rock";

  const htmlContent = `
    <h2>Thank You for Reaching Out!</h2>
    
    <p>Hello ${escapeHtml(data.name)},</p>
    
    <p>Thank you for contacting <strong>Corner Rock</strong>. We have received your inquiry regarding <strong>${escapeHtml(data.service)}</strong>.</p>
    
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
    const transporter = createTransporter(config);

    console.info("[email] Sending client confirmation email.");
    await transporter.sendMail({
      from: config.user,
      to: data.email,
      subject,
      html: htmlContent,
    });
    console.info("[email] Client confirmation email sent.");
    return { success: true };
  } catch (error) {
    console.error(
      "[email] Client confirmation email failed.",
      getSafeErrorMetadata(error)
    );
    throw error;
  }
}
