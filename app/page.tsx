import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { developers, repo } from '@/data/constants';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const DEFAULT_VERSION = '1.0.0';
const RELEASES_URL = `https://github.com/${repo.owner}/${repo.name}/releases`;
const RELEASES_API_URL = `https://api.github.com/repos/${repo.owner}/${repo.name}/releases/latest`;

async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch(RELEASES_API_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return DEFAULT_VERSION;
    }

    const { tag_name } = (await response.json()) as {
      tag_name?: string;
    };

    if (!tag_name) {
      return DEFAULT_VERSION;
    }

    return tag_name.split('.').slice(0, 3).join('.');
  } catch {
    return DEFAULT_VERSION;
  }
}

export default async function Home() {
  const version = await getLatestVersion();

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <section className="w-full max-w-2xl rounded-2xl border border-border bg-card/20 p-6 shadow-xl backdrop-blur-sm md:p-10">
        <div className="space-y-5 text-left">
          <header className="space-y-2">
            <h1 className="text-3xl tracking-tight md:text-4xl">
              Cobalt
              <span className="ml-2 align-baseline text-base text-primary md:text-2xl">
                v{version}
              </span>
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              A free Hypixel Skyblock oriented mod for Fabric
            </p>
          </header>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Developed by
            </span>
            <div className="flex -space-x-2">
              {developers.map((member) => (
                <Avatar
                  key={member.githubUsername}
                  className="border-2 border-background"
                >
                  <AvatarImage
                    src={`https://github.com/${member.githubUsername}.png?size=256`}
                    alt={member.name}
                  />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="px-5 py-5"
            asChild
          >
            <Link
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download <ChevronRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
