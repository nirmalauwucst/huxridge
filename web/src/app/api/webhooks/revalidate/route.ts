import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  if (secret) {
    const token = request.headers.get("x-webhook-secret");
    if (token !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const body = (await request.json()) as { _type?: string; slug?: { current?: string } };
    const type = body._type;
    const slug = body.slug?.current;

    switch (type) {
      case "service":
        revalidatePath("/services");
        if (slug) revalidatePath(`/services/${slug}`);
        revalidatePath("/");
        break;
      case "industry":
        revalidatePath("/industries");
        if (slug) revalidatePath(`/industries/${slug}`);
        break;
      case "blogPost":
        revalidatePath("/blog");
        if (slug) revalidatePath(`/blog/${slug}`);
        revalidatePath("/");
        break;
      case "testimonial":
        revalidatePath("/testimonials");
        revalidatePath("/");
        break;
      case "faq":
        revalidatePath("/faq");
        break;
      case "siteSettings":
        revalidatePath("/", "layout");
        break;
      default:
        revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, type, slug });
  } catch (err) {
    console.error("[Revalidate webhook]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
