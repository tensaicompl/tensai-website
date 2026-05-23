"use client";

import React, { useState, FormEvent } from "react";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SiteNav />

      <main>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "96px 24px 96px",
          }}
        >
          <Eyebrow>CONTACT</Eyebrow>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 48px)",
              letterSpacing: "-0.022em",
              lineHeight: 1.1,
              color: "var(--fg-1)",
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            Get in touch
          </h1>

          <p
            style={{
              color: "var(--fg-2)",
              fontSize: "16px",
              lineHeight: 1.65,
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            Have a question about the blueprint, want to collaborate, or just
            want to connect? Send us a message.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "40px" }}
            noValidate
          >
            {/* Name */}
            <div style={{ marginTop: "24px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--fg-1)",
                  marginBottom: "6px",
                }}
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div style={{ marginTop: "24px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--fg-1)",
                  marginBottom: "6px",
                }}
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@organisation.com"
              />
            </div>

            {/* Subject */}
            <div style={{ marginTop: "24px" }}>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--fg-1)",
                  marginBottom: "6px",
                }}
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div style={{ marginTop: "24px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--fg-1)",
                  marginBottom: "6px",
                }}
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Your message"
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "var(--status-success)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Message sent. We will be in touch.
              </p>
            )}

            {status === "error" && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "var(--status-danger)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <div style={{ marginTop: "32px" }}>
              <Button
                variant="primary"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
