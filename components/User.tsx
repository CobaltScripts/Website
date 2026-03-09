import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface UserProps {
  name: string;
  githubUsername: string;
  role: 'Developer' | 'Contributor';
}

const roleStyles = {
  Developer: {
    hover: 'hover:border-[#347BB2] hover:shadow-[#347BB2]/20',
    badge: 'border-[#347BB2] text-[#347BB2] bg-[#347BB2]/10',
  },
  Contributor: {
    hover: 'hover:border-orange-400 hover:shadow-orange-400/20',
    badge: 'border-orange-400 text-orange-400 bg-orange-400/10',
  },
};

export default function User({ name, githubUsername, role }: UserProps) {
  const avatarUrl = `https://github.com/${githubUsername}.png?size=256`;
  const styles = roleStyles[role];

  return (
    <div
      className={cn(
        'group flex flex-col items-center rounded-xl border border-white/10 bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl',
        styles.hover
      )}
    >
      <Avatar className="my-3 h-20 w-20 border-2 border-white/10">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <Badge variant="outline" className={cn('mt-4', styles.badge)}>
        {role}
      </Badge>
      <h3 className="mt-1 text-lg font-bold">{name}</h3>
    </div>
  );
}
