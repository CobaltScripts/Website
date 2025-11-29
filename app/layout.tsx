import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './_components/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cobalt',
  description:
    'Experience the next level of Skyblock and maximize your grinding potential with Cobalt.',

  openGraph: {
    title: 'Cobalt',
    description:
      'Experience the next level of Skyblock and maximize your grinding potential with Cobalt.',
    url: 'https://cobalt.quiteboring.dev',
    siteName: 'cobalt.quiteboring.dev',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#4682B4',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased overflow-x-hidden flex flex-col min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
