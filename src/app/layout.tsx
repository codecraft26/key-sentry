// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APIScape - API Key Management & Analytics Platform',
  description: 'Comprehensive API key management, usage tracking, and analytics for multi-tenant applications with role-based access control.',
  keywords: ['API', 'API key management', 'analytics', 'usage tracking', 'multi-tenant', 'RBAC'],
  authors: [{ name: 'Your Company Name' }],
  openGraph: {
    title: 'APIScape - API Key Management & Analytics Platform',
    description: 'Comprehensive API key management, usage tracking, and analytics for multi-tenant applications with role-based access control.',
    url: 'https://apiscape.com',
    siteName: 'APIScape',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APIScape Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APIScape - API Key Management & Analytics Platform',
    description: 'Comprehensive API key management, usage tracking, and analytics for multi-tenant applications with role-based access control.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}