import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { SMTP_USER, SMTP_PASS, NOTIFY_EMAIL, PORT = 3001 } = process.env;

if (!SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
  console.warn("Missing SMTP_USER, SMTP_PASS or NOTIFY_EMAIL in server/.env");
}

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { contactPerson, phone, email, message } = req.body;

  if (!contactPerson || !phone || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await transporter.sendMail({
      from: `Elite Dental Lab <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${contactPerson}`,
      text: `Name: ${contactPerson}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${contactPerson}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ error: "Failed to send enquiry email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
