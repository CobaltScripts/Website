import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const regular = Space_Grotesk({
  variable: '--font-regular',
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
  themeColor: '#2c5086',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${regular.className} antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
