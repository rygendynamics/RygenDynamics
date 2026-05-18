import 'dotenv/config';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || GMAIL_USER;

type ContactBody = {
  type: 'contact';
  name: string;
  email: string;
  school: string;
  phone?: string;
  message: string;
};

type CareerBody = {
  type: 'career';
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedin?: string;
  portfolio?: string;
  message: string;
  resume?: { filename: string; content: string };
};

type FormBody = ContactBody | CareerBody;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildAdminHtml(body: FormBody): string {
  const rows = Object.entries(body)
    .filter(([key]) => key !== 'type' && key !== 'resume')
    .map(([key, value]) => {
      if (!value) return '';
      return `<tr><td style="padding:8px 12px;font-weight:600;color:#0f172a;text-transform:capitalize;">${escapeHtml(key)}</td><td style="padding:8px 12px;color:#334155;">${escapeHtml(String(value))}</td></tr>`;
    })
    .join('');

  const title = body.type === 'contact' ? 'Demo Inquiry' : 'Job Application';
  const resumeNote =
    body.type === 'career' && body.resume
      ? '<p style="margin-top:16px;color:#334155;">Resume attached to this email.</p>'
      : '';

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;">
      <h2 style="color:#0f172a;margin:0 0 16px;">New ${title}</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;">${rows}</table>
      ${resumeNote}
    </div>
  `;
}

function buildContactAutoReply(name: string): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#334155;line-height:1.6;">
      <p>Dear ${escapeHtml(name)},</p>
      <p>Thank you for reaching out to <strong>Rygen Dynamics</strong>!</p>
      <p>We have received your demo inquiry and our team will contact you within <strong>24 hours</strong> to schedule your free consultation.</p>
      <p>In the meantime, feel free to explore our programs on our website.</p>
      <p>Best regards,<br/><strong>Rygen Dynamics Team</strong><br/>rygendynamics@gmail.com<br/>+91 8980005452</p>
    </div>
  `;
}

function buildCareerAutoReply(name: string, role: string): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#334155;line-height:1.6;">
      <p>Dear ${escapeHtml(name)},</p>
      <p>Thank you for applying for the <strong>${escapeHtml(role)}</strong> position at <strong>Rygen Dynamics</strong>!</p>
      <p>We have received your application and our talent acquisition team will review it carefully. You can expect to hear from us within <strong>3–5 business days</strong>.</p>
      <p>Best regards,<br/><strong>Rygen Dynamics Talent Team</strong><br/>rygendynamics@gmail.com</p>
    </div>
  `;
}

function validateBody(body: unknown): FormBody | null {
  if (!body || typeof body !== 'object') return null;
  const data = body as Record<string, unknown>;

  if (data.type === 'contact') {
    if (!data.name || !data.email || !data.school || !data.message) return null;
    return {
      type: 'contact',
      name: String(data.name).trim(),
      email: String(data.email).trim(),
      school: String(data.school).trim(),
      phone: data.phone ? String(data.phone).trim() : undefined,
      message: String(data.message).trim(),
    };
  }

  if (data.type === 'career') {
    if (!data.name || !data.email || !data.phone || !data.role || !data.message) return null;
    const resume = data.resume as { filename?: string; content?: string } | undefined;
    return {
      type: 'career',
      name: String(data.name).trim(),
      email: String(data.email).trim(),
      phone: String(data.phone).trim(),
      role: String(data.role).trim(),
      linkedin: data.linkedin ? String(data.linkedin).trim() : undefined,
      portfolio: data.portfolio ? String(data.portfolio).trim() : undefined,
      message: String(data.message).trim(),
      resume:
        resume?.filename && resume?.content
          ? { filename: String(resume.filename), content: String(resume.content) }
          : undefined,
    };
  }

  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !NOTIFY_EMAIL) {
    return res.status(500).json({ error: 'Email service is not configured on the server.' });
  }

  const body = validateBody(req.body);
  if (!body) {
    return res.status(400).json({ error: 'Invalid or incomplete form data.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const adminSubject =
    body.type === 'contact'
      ? `[Rygen] New Demo Inquiry from ${body.name}`
      : `[Rygen] New Application: ${body.role} — ${body.name}`;

  const adminMail: nodemailer.SendMailOptions = {
    from: `"Rygen Dynamics Website" <${GMAIL_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: body.email,
    subject: adminSubject,
    html: buildAdminHtml(body),
    text: Object.entries(body)
      .filter(([key]) => key !== 'type' && key !== 'resume')
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n'),
  };

  if (body.type === 'career' && body.resume) {
    adminMail.attachments = [
      {
        filename: body.resume.filename,
        content: body.resume.content,
        encoding: 'base64',
      },
    ];
  }

  const autoReplySubject =
    body.type === 'contact'
      ? 'Thank you for contacting Rygen Dynamics'
      : `Application received — ${body.role} at Rygen Dynamics`;

  const autoReplyHtml =
    body.type === 'contact'
      ? buildContactAutoReply(body.name)
      : buildCareerAutoReply(body.name, body.role);

  const autoReplyMail: nodemailer.SendMailOptions = {
    from: `"Rygen Dynamics" <${GMAIL_USER}>`,
    to: body.email,
    subject: autoReplySubject,
    html: autoReplyHtml,
    text:
      body.type === 'contact'
        ? `Dear ${body.name},\n\nThank you for reaching out to Rygen Dynamics! We have received your demo inquiry and will contact you within 24 hours.\n\nBest regards,\nRygen Dynamics Team`
        : `Dear ${body.name},\n\nThank you for applying for ${body.role} at Rygen Dynamics! We have received your application and will get back to you within 3-5 business days.\n\nBest regards,\nRygen Dynamics Talent Team`,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(autoReplyMail);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again or email us directly.' });
  }
}
