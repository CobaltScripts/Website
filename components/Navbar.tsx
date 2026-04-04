'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { socials } from '@/data/constants';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Cobalt home">
            <Image
              src="/logo.png"
              alt="Cobalt"
              width={90}
              height={21}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
