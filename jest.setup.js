import '@testing-library/jest-dom';

// Suppress Next.js IntersectionObserver warnings in tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    const errorMessage = args[0];

    // Filter out Next.js Link IntersectionObserver act() warnings
    if (
      typeof errorMessage === 'string' &&
      (errorMessage.includes('not wrapped in act') ||
        errorMessage.includes('use-intersection'))
    ) {
      return;
    }

    // Filter out the stack traces related to act warnings
    if (
      typeof errorMessage === 'string' &&
      errorMessage.includes('Warning: An update to')
    ) {
      return;
    }

    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Mock environment variables
process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
process.env.NEXT_PUBLIC_SITE_NAME = 'Natasha Pereira - Psicóloga';
process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '5561981448553';
process.env.NEXT_PUBLIC_EMAIL = 'natashaa.pereira@hotmail.com';
process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE = 'sounatashapsi';
