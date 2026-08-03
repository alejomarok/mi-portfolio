import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { site } from "@/data/site"

interface ContactPayload {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as ContactPayload

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: site.email,
      subject: `Portfolio contact form — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
