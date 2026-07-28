import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const regular = Space_Grotesk({
  variable: '--font-regular',
  subsets: ['latin'],
});

const title = 'Cobalt';
const description =
  'Experience the next level of Skyblock and maximize your grinding potential with Cobalt.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${regular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
