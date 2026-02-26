import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, fromCity, toCity, message } = body;

    // Validate required fields
    if (!name || !phone || !fromCity || !toCity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'ambhore199@gmail.com',
        pass: 'nyhk ifjh pbke uhpm',
      }
    });

    await transporter.sendMail({
      from: `"Website Lead" <ambhore199@gmail.com>`,
      to: "reliablepackers1@gmail.com, info@admarktech.in",
      subject: "New Lead from Website - Reliable Packers & Movers",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0084D1; text-align: center; margin-bottom: 30px;">New Lead from Website</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Customer Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Moving From:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fromCity}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Moving To:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${toCity}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 6px; border-left: 4px solid #0084D1;">
            <h3 style="color: #333; margin-top: 0;">Additional Message:</h3>
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 6px; text-align: center;">
            <p style="margin: 0; color: #009345; font-weight: bold;">📞 Contact customer as soon as possible!</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: "Quote request sent successfully!" 
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}