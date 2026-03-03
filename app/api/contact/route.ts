import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const sujet = formData.get("sujet") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    if (!prenom || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Build attachments if a file was uploaded
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    await transporter.sendMail({
      from: `"Imrandev Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[Contact] ${sujet || "Nouveau message"} — ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; margin-bottom: 4px;">Nouveau message de ${prenom}</h2>
          <p style="color: #666; font-size: 14px; margin-top: 0;">via imrandev.fr</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="color: #888; padding: 4px 0; width: 80px;">Prénom</td><td style="color: #111;">${prenom}</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Email</td><td><a href="mailto:${email}" style="color: #111;">${email}</a></td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Sujet</td><td style="color: #111;">${sujet || "—"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 14px; color: #333; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          ${file && file.size > 0 ? `<p style="font-size: 13px; color: #888;">📎 Fichier joint : ${file.name}</p>` : ""}
        </div>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
