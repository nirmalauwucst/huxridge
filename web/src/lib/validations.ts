import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .max(30)
    .optional()
    .transform((v) => v || undefined),
  serviceSlug: z
    .string()
    .max(60)
    .optional()
    .transform((v) => v || undefined),
  message: z
    .string()
    .min(10, "Please enter a message (at least 10 characters)")
    .max(2000, "Message must be under 2000 characters"),
  source: z
    .string()
    .max(60)
    .optional()
    .transform((v) => v || undefined),
  turnstileToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z
    .string()
    .max(100)
    .optional()
    .transform((v) => v || undefined),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
