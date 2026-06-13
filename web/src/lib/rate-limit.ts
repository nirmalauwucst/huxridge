import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ratelimit: Ratelimit | null = null;

function getRatelimit(): Ratelimit | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(10, "1 h"),
      prefix: "huxridge:rl",
    });
  }
  return ratelimit;
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const rl = getRatelimit();
  if (!rl) return { allowed: true, remaining: 10 };

  const { success, remaining } = await rl.limit(ip);
  return { allowed: success, remaining };
}
