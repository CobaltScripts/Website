'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { socials } from '@/data/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/verify', label: 'Verify' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string, size: 'xs' | 'sm' = 'xs') =>
    `text-${size} font-semibold transition-colors ${isActive(href) ? 'text-[#347BB2]' : 'hover:text-[#347BB2]'}`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            cobalt.
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaDiscord size={20} />
          </Link>
          <Link
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaGithub size={20} />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Main
                </span>
                {mobileLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className={linkClass(href, 'sm')}>
                    {label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Socials
                </span>
                <Link
                  href={socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors hover:text-[#347BB2]"
                >
                  Discord
                </Link>
                <Link
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors hover:text-[#347BB2]"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
