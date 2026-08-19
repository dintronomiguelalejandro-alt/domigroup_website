import { NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = "sales@domiglobalgroup.com"

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured")
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  let body: {
    firstName?: string
    lastName?: string
    email?: string
    company?: string
    message?: string
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const firstName = body.firstName?.trim()
  const lastName = body.lastName?.trim()
  const email = body.email?.trim()
  const company = body.company?.trim()
  const message = body.message?.trim()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    )
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: "Domi Global Group Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New wholesale inquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    )
  }
}
