import nodemailer from 'nodemailer';
import { getAdminEmailTemplate, getUserEmailTemplate } from './email-templates';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const createTransporter = () => {
  const zohoEmail = process.env.ZOHO_EMAIL;
  const zohoPassword = process.env.ZOHO_PASSWORD;

  if (!zohoEmail || !zohoPassword) {
    throw new Error('ZOHO_EMAIL and ZOHO_PASSWORD environment variables are required');
  }

  return nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: zohoEmail,
      pass: zohoPassword,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2',
    },
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development',
  });
};

export async function sendContactEmails(formData: ContactFormData): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const transporter = createTransporter();
    const zohoEmail = process.env.ZOHO_EMAIL!;
    const adminEmail = process.env.ADMIN_EMAIL || zohoEmail;

    const adminEmailHtml = getAdminEmailTemplate(formData);
    const userEmailHtml = getUserEmailTemplate(formData);

    await Promise.all([
      transporter.sendMail({
        from: `"True Levy" <${zohoEmail}>`,
        to: adminEmail,
        subject: `New Contact Inquiry from ${formData.name}`,
        html: adminEmailHtml,
        replyTo: formData.email,
      }),
      transporter.sendMail({
        from: `"True Levy" <${zohoEmail}>`,
        to: formData.email,
        subject: 'Thank you for contacting True Levy - We\'ll be in touch soon!',
        html: userEmailHtml,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send email';
    
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed. Please check credentials.';
      } else if (error.message.includes('ECONNECTION')) {
        errorMessage = 'Failed to connect to email server.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return { success: false, error: errorMessage };
  }
}

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email server connection verified');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
}
