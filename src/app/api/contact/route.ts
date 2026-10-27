import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { site } from "@/data/site"

export async function POST(request: Request) {
  let payload: unknown
  try { payload = await request.json() }
  catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }) }
  if (!payload || typeof payload !== "object") return NextResponse.json({error:"Invalid request"},{status:400})
  const {name,email,message} = payload as Record<string,unknown>
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
      !name.trim() || !message.trim() || name.length > 120 || email.length > 254 || message.length > 5000 ||
      /[\r\n]/.test(name) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please check the required fields" }, { status: 400 })
  }
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ error: "Email service unavailable. Please use direct email." }, { status: 503 })
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  })
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email.trim(),
      to: site.email,
      subject: `Portfolio contact — ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Could not send email. Please try direct email." }, { status: 500 })
  }
}
