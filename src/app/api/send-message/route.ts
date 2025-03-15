import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface PushoverResponse {
  status: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const PUSHOVER_USER_KEY = process.env.PUSHOVER_USER_KEY;
    const PUSHOVER_API_TOKEN = process.env.PUSHOVER_API_TOKEN;

    if (!PUSHOVER_USER_KEY || !PUSHOVER_API_TOKEN) {
      return NextResponse.json({ error: "Pushover API credentials missing" }, { status: 500 });
    }

    const response = await axios.post<PushoverResponse>("https://api.pushover.net/1/messages.json", {
      token: PUSHOVER_API_TOKEN,
      user: PUSHOVER_USER_KEY,
      title: "New Contact Form Message",
      message: `From: ${name} (${email})\nSubject: ${subject || "No subject"}\nMessage: ${message}`,
      priority: 1,
    });

    if (response.data.status === 1) {
      return NextResponse.json({ success: true, message: "Notification sent!" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
    }
  } catch (error) {
    console.error("Pushover error:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}
