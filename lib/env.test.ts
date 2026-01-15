// lib/env.test.ts
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

describe('env validation', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should validate all required environment variables', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
    process.env.NEXT_PUBLIC_SITE_NAME = 'Natasha Pereira - Psicóloga';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '5561981448553';
    process.env.NEXT_PUBLIC_EMAIL = 'natashaa.pereira@hotmail.com';
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE = 'sounatashapsi';

    const env = envSchema.parse(process.env);
    expect(env.NEXT_PUBLIC_SITE_URL).toBe('http://localhost:3000');
    expect(env.NEXT_PUBLIC_SITE_NAME).toBe('Natasha Pereira - Psicóloga');
    expect(env.NEXT_PUBLIC_WHATSAPP_NUMBER).toBe('5561981448553');
    expect(env.NEXT_PUBLIC_EMAIL).toBe('natashaa.pereira@hotmail.com');
    expect(env.NEXT_PUBLIC_INSTAGRAM_HANDLE).toBe('sounatashapsi');
  });

  it('should throw error for invalid WhatsApp number', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
    process.env.NEXT_PUBLIC_SITE_NAME = 'Natasha Pereira - Psicóloga';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = 'invalid-phone';
    process.env.NEXT_PUBLIC_EMAIL = 'natashaa.pereira@hotmail.com';
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE = 'sounatashapsi';

    expect(() => envSchema.parse(process.env)).toThrow(
      'WhatsApp number must contain only digits'
    );
  });

  it('should throw error for invalid email', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
    process.env.NEXT_PUBLIC_SITE_NAME = 'Natasha Pereira - Psicóloga';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '5561981448553';
    process.env.NEXT_PUBLIC_EMAIL = 'invalid-email';
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE = 'sounatashapsi';

    expect(() => envSchema.parse(process.env)).toThrow();
  });

  it('should throw error for missing required variables', () => {
    process.env.NEXT_PUBLIC_SITE_NAME = 'Natasha Pereira - Psicóloga';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '5561981448553';
    process.env.NEXT_PUBLIC_EMAIL = 'natashaa.pereira@hotmail.com';
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE = 'sounatashapsi';
    delete process.env.NEXT_PUBLIC_SITE_URL; // explicitly delete

    expect(() => envSchema.parse(process.env)).toThrow();
  });
});
