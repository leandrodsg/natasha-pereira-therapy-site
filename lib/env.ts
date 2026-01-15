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

export const env = envSchema.parse(process.env);
