import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z
    .string()
    .regex(/^\d+$/, 'WhatsApp number must contain only digits'),
  NEXT_PUBLIC_EMAIL: z.string().email(),
  NEXT_PUBLIC_INSTAGRAM_HANDLE: z.string().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  NEXT_PUBLIC_INSTAGRAM_HANDLE: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE,
});
