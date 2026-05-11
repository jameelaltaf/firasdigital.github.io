import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  country?: string;
  services?: string[];
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, phone, country, services, message } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    // In production: forward to CRM, send email via Resend/SendGrid, etc.
    // For now we log and acknowledge.
    console.log("[contact-form]", {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      country: country ?? "—",
      services: services ?? [],
      message: message?.trim() ?? "—",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
