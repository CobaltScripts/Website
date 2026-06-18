'use client';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-center border-t border-[var(--border-color)] z-10 mt-16 text-center">
      <p className="text-xs text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Cobalt Mod. Not affiliated with
        Hypixel Inc. or Mojang Studios.
      </p>
    </footer>
  );
}
