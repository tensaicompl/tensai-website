import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Email sending placeholder — Resend integration to be configured
  // For now, log and return success
  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json({ success: true });
}
