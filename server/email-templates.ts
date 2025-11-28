interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const getLogoUrl = () => {
  const devDomain = process.env.REPLIT_DEV_DOMAIN;
  if (devDomain) {
    return `https://${devDomain}/logo.png`;
  }
  return 'https://truelevy.in/logo.png';
};

export function getAdminEmailTemplate(data: ContactFormData): string {
  const logoUrl = getLogoUrl();
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - True Levy</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table role="presentation" style="width: 100%; max-width: 650px; border-collapse: collapse; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
          
          <!-- Logo & Header -->
          <tr>
            <td style="padding: 0; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); position: relative;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center" style="padding: 50px 40px 40px;">
                    <img src="${logoUrl}" alt="True Levy" style="height: 70px; width: auto; display: block; margin: 0 auto;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 0 40px 50px;">
                    <h1 style="margin: 20px 0 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                      🎯 New Lead Alert!
                    </h1>
                    <p style="margin: 12px 0 0; color: #dbeafe; font-size: 16px; font-weight: 500;">
                      Someone is interested in your services
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 45px;">
              
              <!-- Intro -->
              <table role="presentation" style="width: 100%; margin-bottom: 35px;">
                <tr>
                  <td style="padding: 25px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; border-left: 5px solid #3b82f6;">
                    <p style="margin: 0; color: #1e40af; font-size: 17px; font-weight: 600; line-height: 1.6;">
                      💼 A potential client just submitted an inquiry through your website!
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Details Cards -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                
                <!-- Name -->
                <tr>
                  <td style="padding-bottom: 18px;">
                    <table role="presentation" style="width: 100%; background: #f8fafc; border-radius: 12px; border: 2px solid #e2e8f0; overflow: hidden;">
                      <tr>
                        <td style="padding: 22px 25px;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 40px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 20px; line-height: 40px; text-align: center; display: block;">👤</span>
                                </div>
                              </td>
                              <td style="vertical-align: middle;">
                                <p style="margin: 0 0 4px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
                                  Full Name
                                </p>
                                <p style="margin: 0; color: #0f172a; font-size: 20px; font-weight: 700;">
                                  ${data.name}
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="padding-bottom: 18px;">
                    <table role="presentation" style="width: 100%; background: #f8fafc; border-radius: 12px; border: 2px solid #e2e8f0; overflow: hidden;">
                      <tr>
                        <td style="padding: 22px 25px;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 40px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 20px; line-height: 40px; text-align: center; display: block;">✉️</span>
                                </div>
                              </td>
                              <td style="vertical-align: middle;">
                                <p style="margin: 0 0 4px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
                                  Email Address
                                </p>
                                <p style="margin: 0;">
                                  <a href="mailto:${data.email}" style="color: #3b82f6; font-size: 18px; font-weight: 600; text-decoration: none;">${data.email}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Phone -->
                <tr>
                  <td style="padding-bottom: 18px;">
                    <table role="presentation" style="width: 100%; background: #f8fafc; border-radius: 12px; border: 2px solid #e2e8f0; overflow: hidden;">
                      <tr>
                        <td style="padding: 22px 25px;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 40px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 20px; line-height: 40px; text-align: center; display: block;">📱</span>
                                </div>
                              </td>
                              <td style="vertical-align: middle;">
                                <p style="margin: 0 0 4px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
                                  Phone Number
                                </p>
                                <p style="margin: 0;">
                                  <a href="tel:${data.phone}" style="color: #3b82f6; font-size: 18px; font-weight: 600; text-decoration: none;">${data.phone}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Service -->
                <tr>
                  <td style="padding-bottom: 18px;">
                    <table role="presentation" style="width: 100%; background: #f8fafc; border-radius: 12px; border: 2px solid #e2e8f0; overflow: hidden;">
                      <tr>
                        <td style="padding: 22px 25px;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 40px; vertical-align: top; padding-right: 15px;">
                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 20px; line-height: 40px; text-align: center; display: block;">🎯</span>
                                </div>
                              </td>
                              <td style="vertical-align: middle;">
                                <p style="margin: 0 0 4px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
                                  Service Interest
                                </p>
                                <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 600;">
                                  ${data.service}
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Message -->
                <tr>
                  <td style="padding-bottom: 0;">
                    <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; border: 2px solid #fbbf24; overflow: hidden;">
                      <tr>
                        <td style="padding: 25px;">
                          <p style="margin: 0 0 12px; color: #92400e; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
                            💬 Their Message
                          </p>
                          <p style="margin: 0; color: #1c1917; font-size: 16px; line-height: 1.8; white-space: pre-wrap; font-weight: 500;">
${data.message}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; margin-top: 40px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re:%20Your%20Inquiry%20at%20True%20Levy&body=Hi%20${data.name},%0D%0A%0D%0AThank%20you%20for%20reaching%20out%20to%20True%20Levy." style="display: inline-block; padding: 18px 45px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 17px; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4); transition: all 0.3s;">
                      📧 Reply to ${data.name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 35px 45px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-top: 3px solid #3b82f6;">
              <p style="margin: 0 0 8px; color: #1e293b; font-size: 15px; text-align: center; font-weight: 700;">
                True Levy Financial Consulting
              </p>
              <p style="margin: 0; color: #64748b; font-size: 14px; text-align: center; line-height: 1.6;">
                This inquiry was submitted via <a href="https://truelevy.in" style="color: #3b82f6; text-decoration: none; font-weight: 600;">truelevy.in</a><br>
                Respond within 24 hours for best conversion rates
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function getUserEmailTemplate(data: ContactFormData): string {
  const logoUrl = getLogoUrl();
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting True Levy</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f0f4f8;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f0f4f8;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px;">
          
          <!-- Header with Logo -->
          <tr>
            <td align="center" style="padding: 40px 30px; background-color: #3b82f6;">
              <!-- Logo -->
              <img src="${logoUrl}" alt="True Levy" width="200" style="display: block; max-width: 200px; height: auto; margin: 0 auto;" />
              
              <!-- Success Icon (Emoji) -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-top: 25px;">
                    <div style="font-size: 48px; line-height: 1;">✅</div>
                  </td>
                </tr>
              </table>
              
              <!-- Title -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                      We've Got Your Message!
                    </h1>
                    <p style="margin: 10px 0 0; color: #dbeafe; font-size: 15px;">
                      Thank you for reaching out to us
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content Section -->
          <tr>
            <td style="padding: 35px 30px;">
              
              <!-- Personalized Greeting -->
              <h2 style="margin: 0 0 15px; color: #0f172a; font-size: 22px; font-weight: bold;">
                Hi ${data.name.split(' ')[0]}, 👋
              </h2>
              
              <p style="margin: 0 0 25px; color: #475569; font-size: 15px; line-height: 1.6;">
                Thank you for contacting <strong style="color: #1e40af;">True Levy</strong>. We've received your inquiry about <strong>${data.service}</strong> and our expert team of chartered accountants is already reviewing it.
              </p>
              
              <!-- Response Time Box -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 25px 0;">
                <tr>
                  <td style="padding: 25px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td width="60" valign="middle">
                          <div style="width: 50px; height: 50px; background-color: #3b82f6; border-radius: 8px; text-align: center; line-height: 50px; font-size: 28px;">⏰</div>
                        </td>
                        <td valign="middle" style="padding-left: 15px;">
                          <p style="margin: 0 0 3px; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                            RESPONSE TIME
                          </p>
                          <p style="margin: 0; color: #1e40af; font-size: 18px; font-weight: bold;">
                            Within 24 Hours
                          </p>
                          <p style="margin: 3px 0 0; color: #64748b; font-size: 13px;">
                            Mon-Sat, 10 AM - 7 PM IST
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- What Happens Next -->
              <h3 style="margin: 25px 0 18px; color: #0f172a; font-size: 18px; font-weight: bold;">
                What happens next?
              </h3>
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 12px 0;" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: bold; font-size: 14px;">1</div>
                        </td>
                        <td valign="top" style="padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: #0f172a; font-size: 15px; font-weight: bold;">Expert Review</p>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">Our chartered accountants will carefully review your requirements</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 12px 0;" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #3b82f6; border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: bold; font-size: 14px;">2</div>
                        </td>
                        <td valign="top" style="padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: #0f172a; font-size: 15px; font-weight: bold;">Personalized Response</p>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">We'll reach out with a customized solution and pricing</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 12px 0;" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #8b5cf6; border-radius: 50%; text-align: center; line-height: 32px; color: white; font-weight: bold; font-size: 14px;">3</div>
                        </td>
                        <td valign="top" style="padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: #0f172a; font-size: 15px; font-weight: bold;">Get Started</p>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">Once approved, we'll begin working on your financial needs</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Divider -->
              <div style="height: 1px; background-color: #e2e8f0; margin: 25px 0;"></div>
              
              <!-- Need Immediate Help -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 25px 0;">
                <tr>
                  <td style="padding: 25px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <h3 style="margin: 0 0 18px; color: #0f172a; font-size: 18px; font-weight: bold; text-align: center;">
                      Need Immediate Assistance?
                    </h3>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <!-- Phone -->
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td width="50" valign="middle">
                                <div style="width: 40px; height: 40px; background-color: #3b82f6; border-radius: 8px; text-align: center; line-height: 40px; font-size: 22px;">📞</div>
                              </td>
                              <td valign="middle" style="padding-left: 12px;">
                                <p style="margin: 0 0 2px; color: #64748b; font-size: 11px; font-weight: bold; text-transform: uppercase;">CALL US</p>
                                <p style="margin: 0;">
                                  <a href="tel:+919692000140" style="color: #0f172a; text-decoration: none; font-size: 15px; font-weight: bold;">+91-9692000140</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- WhatsApp -->
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td width="50" valign="middle">
                                <div style="width: 40px; height: 40px; background-color: #10b981; border-radius: 8px; text-align: center; line-height: 40px; font-size: 22px;">💬</div>
                              </td>
                              <td valign="middle" style="padding-left: 12px;">
                                <p style="margin: 0 0 2px; color: #64748b; font-size: 11px; font-weight: bold; text-transform: uppercase;">WHATSAPP</p>
                                <p style="margin: 0;">
                                  <a href="https://wa.me/919692000140" style="color: #0f172a; text-decoration: none; font-size: 15px; font-weight: bold;">Chat with us now</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Email -->
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td width="50" valign="middle">
                                <div style="width: 40px; height: 40px; background-color: #f59e0b; border-radius: 8px; text-align: center; line-height: 40px; font-size: 22px;">✉️</div>
                              </td>
                              <td valign="middle" style="padding-left: 12px;">
                                <p style="margin: 0 0 2px; color: #64748b; font-size: 11px; font-weight: bold; text-transform: uppercase;">EMAIL</p>
                                <p style="margin: 0;">
                                  <a href="mailto:info@truelevy.in" style="color: #0f172a; text-decoration: none; font-size: 15px; font-weight: bold;">info@truelevy.in</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Our Services -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 25px 0;">
                <tr>
                  <td style="padding: 25px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fbbf24;">
                    <h3 style="margin: 0 0 15px; color: #78350f; font-size: 18px; font-weight: bold; text-align: center;">
                      Our Core Services
                    </h3>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 3px 0; color: #92400e; font-size: 14px; font-weight: bold; line-height: 1.8;">
                          ✓ Company & LLP Registration<br>
                          ✓ GST Registration & Filing<br>
                          ✓ Income Tax & TDS Compliance<br>
                          ✓ ROC Filing & Annual Returns<br>
                          ✓ Financial Statements & Auditing<br>
                          ✓ Project Finance Assistance
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 25px 0 0;">
                <tr>
                  <td align="center">
                    <a href="https://truelevy.in" style="display: inline-block; padding: 14px 35px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px;">
                      Visit Our Website →
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #1e293b;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 10px; color: #ffffff; font-size: 16px; font-weight: bold;">
                      True Levy Financial Consulting
                    </p>
                    <p style="margin: 0 0 10px; color: #94a3b8; font-size: 13px; line-height: 1.6;">
                      Plot-9429, Cuttack - Puri Bypass Rd, B.B.Nagar, Baragarh<br>
                      Bhubaneswar, Odisha 751002, India
                    </p>
                    <p style="margin: 0 0 15px; color: #94a3b8; font-size: 13px;">
                      📞 +91-9692000140 | ✉️ info@truelevy.in
                    </p>
                    
                    <!-- Divider -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="200" style="margin: 0 auto;">
                      <tr>
                        <td style="border-top: 1px solid #334155; padding-top: 15px;"></td>
                      </tr>
                    </table>
                    
                    <p style="margin: 15px 0 8px; color: #64748b; font-size: 12px;">
                      © 2024 True Levy. All rights reserved.
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 13px; font-style: italic; font-weight: bold;">
                      Because Every Rupee Counts
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
