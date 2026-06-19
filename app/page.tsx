'use client';

import { useEffect, useState } from 'react';
import { info } from '@/lib/constants';
import { fetchRepoStats } from '@/lib/github';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import GlassButton from '@/components/Button';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    stars: '0 Stars',
    downloads: '0 Downloads',
  });

  useEffect(() => {
    setMounted(true);

    const getStats = async () => {
      const data = await fetchRepoStats(info.githubRepo);
      setStats(data);
    };

    getStats();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <link rel="icon" href="https://github.com/CobaltScripts.png" />

      <div className="ambient-glow" />
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10 relative">
        <div className="max-w-3xl text-center flex flex-col items-center">
          <span className="badge-solid select-none text-xs text-[var(--accent-color)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
            Open Source &middot; {stats.stars} &middot;{' '}
            {stats.downloads}
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-[var(--text-primary)]">
            Don't worry
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="text-[var(--accent-color)] underline decoration-wavy decoration-2 underline-offset-8">
              It's opensource.
            </span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            Scripts. Modules. Addons.
            <br />
            The ultimate Hypixel Skyblock utility mod.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <GlassButton
              text="View on GitHub"
              url={info.githubRepo}
              icon={FaGithub}
            />
            <GlassButton
              text="Join Discord"
              url={info.discordServer}
              icon={FaDiscord}
            />
          </div>
        </div>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}