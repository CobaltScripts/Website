'use client';

import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <link rel="icon" href="https://github.com/CobaltScripts.png" />

      <div className="ambient-glow" />
      <main className="grow flex flex-col items-center justify-center px-6 py-12 z-10 relative">
        <div className="max-w-md text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-(--text-primary)">
            Lost in the
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
            <span className="text-(--accent-color) underline-anim">
              Clouds?
            </span>
          </h2>

          <p className="text-base text-(--text-secondary) leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back to safety.
          </p>

          <Button text="Home" url="/" />
        </div>
      </main>
    </div>
  );
}
