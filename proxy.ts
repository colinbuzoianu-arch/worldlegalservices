import createMiddleware from 'next-intl/middleware';

export const proxy = createMiddleware({
  locales: ['en', 'de', 'ro'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
