// src/app/layout.tsx
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import Header from '../components/layout/Header';

// Primary heading font - Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['500', '600', '700'],
});

// Body text font - Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'KeySentry - API Key Management & Analytics Platform',
  description: 'Comprehensive API key management, usage tracking, and analytics for multi-tenant applications with role-based access control.',
  keywords: ['API', 'API key management', 'analytics', 'usage tracking', 'multi-tenant', 'RBAC'],
  authors: [{ name: 'Your Company Name' }],
  openGraph: {
    title: 'KeySentry - API Key Management & Analytics Platform',
    description: 'Comprehensive API key management, usage tracking, and analytics for multi-tenant applications with role-based access control.',
    url: 'https://keysentry.com',
    siteName: 'KeySentry',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KeySentry Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeySentry - API Key Management & Analytics Platform',
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
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}