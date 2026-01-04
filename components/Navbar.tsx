'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            cobalt.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-xs font-semibold transition-colors ${
                isActive('/')
                  ? 'text-[#347BB2]'
                  : 'hover:text-[#347BB2]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className={`text-xs font-semibold transition-colors ${
                isActive('/faq')
                  ? 'text-[#347BB2]'
                  : 'hover:text-[#347BB2]'
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className={`text-xs font-semibold transition-colors ${
                isActive('/about')
                  ? 'text-[#347BB2]'
                  : 'hover:text-[#347BB2]'
              }`}
            >
              About
            </Link>
            <Link
              href="/verify"
              className={`text-xs font-semibold transition-colors ${
                isActive('/verify')
                  ? 'text-[#347BB2]'
                  : 'hover:text-[#347BB2]'
              }`}
            >
              Verify
            </Link>
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://discord.gg/GAhS8UfDyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaDiscord size={20} />
          </Link>

          <Link
            href="https://github.com/CobaltScripts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaGithub size={20} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Main
                </span>

                <Link
                  href="/"
                  className={`text-sm font-semibold transition-colors ${
                    isActive('/')
                      ? 'text-[#347BB2]'
                      : 'hover:text-[#347BB2]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/faq"
                  className={`text-sm font-semibold transition-colors ${
                    isActive('/faq')
                      ? 'text-[#347BB2]'
                      : 'hover:text-[#347BB2]'
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-semibold transition-colors ${
                    isActive('/about')
                      ? 'text-[#347BB2]'
                      : 'hover:text-[#347BB2]'
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/verify"
                  className={`text-sm font-semibold transition-colors ${
                    isActive('/verify')
                      ? 'text-[#347BB2]'
                      : 'hover:text-[#347BB2]'
                  }`}
                >
                  Verify
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Socials
                </span>

                <Link
                  href="https://discord.gg/GAhS8UfDyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors hover:text-[#347BB2]"
                >
                  Discord
                </Link>
                <Link
                  href="https://github.com/CobaltScripts"
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
