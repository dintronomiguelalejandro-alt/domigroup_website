"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/sales@domiglobalgroup.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "First name": data.get("firstName"),
            "Last name": data.get("lastName"),
            Email: data.get("email"),
            Company: data.get("company"),
            Message: data.get("message"),
            _subject: "New wholesale inquiry from the website",
            _template: "table",
            _captcha: "false",
          }),
        }
      )

      const result = await res.json().catch(() => null)

      if (!res.ok || !result || result.success === "false" || result.success === false) {
        throw new Error(
          result?.message ||
            "Something went wrong. Please try again or email us directly."
        )
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly."
      )
    }
  }

  if (status === "success") {
    return (
      <Card className="gap-2 rounded-2xl border-2 border-primary p-8 text-center shadow-none">
        <h3 className="text-lg font-semibold tracking-tight">
          Message sent
        </h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. Our purchasing team will get back to
          you within 24 hours.
        </p>
      </Card>
    )
  }

  return (
    <Card className="gap-0 rounded-2xl border-2 border-primary p-8 shadow-none">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" name="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" name="lastName" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Business email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company name</Label>
          <Input id="company" name="company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-28"
            placeholder="Tell us about your brand and the products you distribute..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}

        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading"
            ? "Sending…"
            : "Submit Wholesale Inquiry →"}
        </Button>
      </form>
    </Card>
  )
}
