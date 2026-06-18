import React from 'react';
import { IconType } from 'react-icons';

interface GlassButtonProps {
  text: string;
  url: string;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  external?: boolean;
}

export default function GlassButton({
  text,
  url,
  icon: Icon,
  external = true,
}: GlassButtonProps) {
  return (
    <a
      href={url}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="btn-glass select-none"
    >
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      <span>{text}</span>
    </a>
  );
}