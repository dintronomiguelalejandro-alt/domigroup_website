"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getDictionary, type Locale } from "@/lib/i18n/dictionary"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).contactForm
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || t.genericError)
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : t.genericError)
    }
  }

  if (status === "success") {
    return (
      <Card className="gap-2 rounded-2xl border-2 border-primary p-8 text-center shadow-none">
        <h3 className="text-lg font-semibold tracking-tight">
          {t.successTitle}
        </h3>
        <p className="text-sm text-muted-foreground">{t.successBody}</p>
      </Card>
    )
  }

  return (
    <Card className="gap-0 rounded-2xl border-2 border-primary p-8 shadow-none">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">{t.firstName}</Label>
            <Input id="first-name" name="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">{t.lastName}</Label>
            <Input id="last-name" name="lastName" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.email}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{t.company}</Label>
          <Input id="company" name="company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">{t.message}</Label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-28"
            placeholder={t.messagePlaceholder}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}

        <Button
          type="submit"
          className="h-auto min-h-11 w-full py-3 text-center whitespace-normal"
          disabled={status === "loading"}
        >
          {status === "loading" ? t.sending : t.submit}
        </Button>
      </form>
    </Card>
  )
}
