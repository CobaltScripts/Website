import { FiExternalLink } from 'react-icons/fi';

interface ButtonProps {
  text: string;
  url: string;
  external?: boolean;
}

const base =
  'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 select-none';

export default function Button({
  text,
  url,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={url}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className={
        external
          ? `${base} text-(--text-primary) border border-(--border-color) hover:bg-(--text-secondary)/10`
          : `${base} bg-(--accent-color) text-white hover:brightness-75 hover:shadow-lg hover:shadow-(--accent-color)/20`
      }
    >
      <span>{text}</span>
      {external && <FiExternalLink className="w-4 h-4" />}
    </a>
  );
}
