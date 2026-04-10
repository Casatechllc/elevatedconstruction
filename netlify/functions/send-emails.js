import nodemailer from 'nodemailer';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    if (data.botField && data.botField.trim() !== "") {
      return { statusCode: 200, body: JSON.stringify({ message: 'Success' }) };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const firstName = data.name ? data.name.split(' ')[0] : 'there';
    const urgencyLabel = data.urgency === 'high' ? '🚨 EMERGENCY' : 'Standard';

    // 1. INTERNAL NOTIFICATION (To Jordan/Admin)
    await transporter.sendMail({
      from: `"Elevated Lead Engine" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `${data.urgency === 'high' ? '⚡' : '📋'} NEW LEAD: ${data.service.toUpperCase()} - ${data.location}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 20px;">
            <tr>
              <td align="center">
                <table width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
                  <tr>
                    <td style="background-color: ${data.urgency === 'high' ? '#be123c' : '#560873'}; padding: 20px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 18px; text-transform: uppercase; letter-spacing: 0.1em;">New Service Lead</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px;">
                      <table width="100%" style="border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Urgency</td>
                          <td style="padding: 12px 0; color: ${data.urgency === 'high' ? '#be123c' : '#0f172a'}; font-weight: 700;">${urgencyLabel}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Service</td>
                          <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${data.service}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Contact</td>
                          <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Phone</td>
                          <td style="padding: 12px 0; color: #0f172a;">${data.phone}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Email</td>
                          <td style="padding: 12px 0; color: #0f172a;">${data.email}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Location</td>
                          <td style="padding: 12px 0; color: #0f172a;">${data.location}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700; vertical-align: top;">Details</td>
                          <td style="padding: 12px 0; color: #334155; font-size: 14px; line-height: 1.5;">${data.message || 'No details provided.'}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 24px 24px 24px;">
                      <a href="tel:${data.phone}" style="display: block; background-color: #0f172a; color: #ffffff; text-align: center; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; margin-bottom: 10px;">📞 Call ${data.phone}</a>
                      <a href="mailto:${data.email}" style="display: block; background-color: #f8fafc; color: #0f172a; text-align: center; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; border: 1px solid #e2e8f0;">📧 Reply to ${data.email}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // 2. AUTO-REPLY (To the Client)
    await transporter.sendMail({
      from: `"Elevated Construction" <${process.env.NOREPLY_ALIAS}>`,
      to: data.email,
      replyTo: process.env.ADMIN_EMAIL,
      subject: `Received: Quote Request for ${data.service} | Elevated Construction`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 40px 10px;">
            <tr>
              <td align="center">
                <table width="600" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
                  <tr>
                    <td style="padding: 40px; text-align: left;">
                      <h2 style="color: #560873; margin-top: 0; font-size: 24px;">Elevated<span style="color: #f9b115;">Construction</span></h2>
                      <p style="font-size: 16px; color: #1e293b;">Hello ${firstName},</p>
                      <p style="font-size: 16px; color: #1e293b; line-height: 1.6;">Thank you for reaching out regarding your <strong>${data.service}</strong> project. We have received your request for the property at <strong>${data.location}</strong> and our team is currently reviewing your details.</p>
                      
                      <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #f9b115; margin: 24px 0;">
                        <p style="margin: 0; font-weight: 600; color: #0f172a;">What happens next?</p>
                        <p style="margin: 8px 0 0 0; color: #334155;">A project specialist will contact you at <strong>${data.phone}</strong> to discuss your needs and schedule an assessment.</p>
                      </div>

                      <p style="font-size: 15px; color: #64748b; margin-bottom: 24px;">Need to speak with us right away or have an emergency update?</p>
                      
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td>
                            <a href="tel:5408100978" style="display: inline-block; background-color: #560873; color: #ffffff; text-align: center; padding: 14px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-right: 10px;">📞 Call Office</a>
                            <a href="mailto:${process.env.ADMIN_EMAIL}" style="display: inline-block; background-color: #ffffff; color: #560873; text-align: center; padding: 14px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; border: 2px solid #560873;">📧 Email Us</a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px; color: #0f172a; font-weight: 700; margin-bottom: 0;">The Elevated Construction Team</p>
                      <p style="margin-top: 4px; font-size: 13px; color: #64748b;">Restoration & Remodeling Excellence</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Sent' }) };
  } catch (error) {
    console.error('Email Error:', error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Error' }) };
  }
};