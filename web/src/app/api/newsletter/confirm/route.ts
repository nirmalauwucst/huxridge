import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?newsletter=invalid", request.url));
  }

  let email: string;
  let timestamp: number;

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const [emailPart, tsPart] = decoded.split(":");
    email = emailPart ?? "";
    timestamp = parseInt(tsPart ?? "0", 10);
  } catch {
    return NextResponse.redirect(new URL("/?newsletter=invalid", request.url));
  }

  // Token expires after 24 hours
  if (!email || Date.now() - timestamp > 86_400_000) {
    return NextResponse.redirect(new URL("/?newsletter=expired", request.url));
  }

  try {
    await db.newsletterSubscriber.updateMany({
      where: { email, status: "pending" },
      data: { status: "confirmed", confirmedAt: new Date() },
    });
  } catch (err) {
    console.error("[Newsletter confirm] DB error:", err);
    return NextResponse.redirect(new URL("/?newsletter=error", request.url));
  }

  return NextResponse.redirect(new URL("/?newsletter=confirmed", request.url));
}
