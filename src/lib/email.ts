import nodemailer from "nodemailer";

// Create a transporter instance
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

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
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_NOTIFICATION_EMAIL,
      subject,
      html: htmlContent,
      replyTo: data.email,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send company notification:", error);
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
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: data.email,
      subject,
      html: htmlContent,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send client confirmation:", error);
    throw error;
  }
}
