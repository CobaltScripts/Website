'use client';

import { useEffect } from 'react';

const DISCORD_INVITE_URL = 'https://discord.gg/GAhS8UfDyy';

export default function NotFound() {
  useEffect(() => {
    window.location.replace(DISCORD_INVITE_URL);
  }, []);

  return null;
}
