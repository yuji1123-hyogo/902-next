import { getEvents, createEvent } from "@/lib/events";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 基本的なバリデーション
    if (!body.title || !body.date) {
      return NextResponse.json(
        { error: "Title and date are required" },
        { status: 400 }
      );
    }

    const event = await createEvent(body);
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
