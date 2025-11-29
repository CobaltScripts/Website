import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppinsMono = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Cobalt",
  description: "Experience the next level of Skyblock and maximize your grinding potential with Cobalt.",

  openGraph: {
    title: 'Cobalt',
    description: 'Experience the next level of Skyblock and maximize your grinding potential with Cobalt.',
    url: 'https://cobalt.quiteboring.dev',
    siteName: 'cobalt.quiteboring.dev',

    images: [
      {
        url: 'https://cobalt.quiteboring.dev/logo.png',
        width: 250,
        height: 250,
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#4682B4',
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${poppinsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
