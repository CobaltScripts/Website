'use client';

import { useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import GlassButton from '@/components/Button';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <link rel="icon" href="https://github.com/CobaltScripts.png" />

      <div className="ambient-glow" />
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10 relative">
        <div className="max-w-md text-center flex flex-col items-center">
          <span className="badge-solid-red select-none text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            404 Error &middot; Page Not Found
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-[var(--text-primary)]">
            Lost in the
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="text-[var(--accent-color)] underline decoration-wavy decoration-2 underline-offset-8">
              Clouds?
            </span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-10">
            The page you're looking for doesn't exist or has been
            moved. Let's get you back to safety.
          </p>

          <GlassButton
            text="Back to Home"
            url="/"
            icon={HiArrowLeft}
            external={false}
          />

        </div>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}