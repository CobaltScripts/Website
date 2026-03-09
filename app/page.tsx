import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { developers, repo } from '@/data/constants';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <div className="space-y-2 text-left">
        <h1 className="text-3xl tracking-tight md:text-4xl">
          Revolutionize your grind
          <span className="block text-[#347BB2]">with superior automation</span>
        </h1>

        <div className="flex items-center gap-1">
          <span className="text-sm text-muted-foreground">Developed by</span>
          <div className="flex -space-x-3">
            {developers.map((member) => (
              <Avatar key={member.githubUsername} className="border-2 border-background">
                <AvatarImage
                  src={`https://github.com/${member.githubUsername}.png?size=256`}
                  alt={member.name}
                />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`https://github.com/${repo.owner}/${repo.name}/releases`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download now <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
