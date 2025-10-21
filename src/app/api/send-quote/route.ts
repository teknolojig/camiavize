import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Ad, e-posta ve telefon alanları zorunludur.' },
        { status: 400 }
      );
    }

    // Create Yandex SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Yeni Teklif Talebi - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #252d5e 0%, #C91E38 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #252d5e;
              margin-bottom: 5px;
            }
            .field-value {
              background: white;
              padding: 12px;
              border-left: 4px solid #C91E38;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🕌 Yeni Teklif Talebi</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Tavcam Cami Avizesi</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Ad Soyad:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 E-posta:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📱 Telefon:</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>

              ${message ? `
              <div class="field">
                <div class="field-label">💬 Mesaj:</div>
                <div class="field-value">${message}</div>
              </div>
              ` : ''}

              <div class="footer">
                <p>Bu mesaj camiavize.com web sitesindeki teklif formundan gönderilmiştir.</p>
                <p>Gönderim Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
Yeni Teklif Talebi - Tavcam Cami Avizesi

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
${message ? `Mesaj: ${message}` : ''}

Gönderim Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Talebiniz başarıyla gönderildi.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
