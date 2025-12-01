import Link from 'next/link';
import { FaDiscord, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            cobalt.
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-xs font-semibold transition-colors hover:text-[#347BB2]">
              Home
            </Link>
            <Link href="/about" className="text-xs font-semibold transition-colors hover:text-[#347BB2]">
              About
            </Link>
            <Link href="/faq" className="text-xs font-semibold transition-colors hover:text-[#347BB2]">
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://discord.gg/GAhS8UfDyy"
            target="_blank"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaDiscord size={20} />
          </Link>

          <Link
            href="https://github.com/CobaltScripts"
            target="_blank"
            className="text-[#B4B4B4] transition-colors hover:text-[#F8F9FA]"
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
