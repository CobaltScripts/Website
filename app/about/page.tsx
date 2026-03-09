import TeamSection from '@/components/TeamSection';
import { developers, repo } from '@/data/constants';

interface GitHubContributor {
  login: string;
  id: number;
  contributions: number;
}

async function getContributors() {
  const res = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.name}/contributors`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];

  const data: GitHubContributor[] = await res.json();

  const developerUsernames = developers.map((d) => d.githubUsername.toLowerCase());
  return data
    .filter(
      (c) =>
        !developerUsernames.includes(c.login.toLowerCase()) &&
        !c.login.includes('[bot]')
    )
    .map((c) => ({
      name: c.login,
      githubUsername: c.login,
    }));
}

export default async function About() {
  const contributors = await getContributors();

  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">The Team</h1>
        <p className="mt-4 text-muted-foreground">
          Meet the people behind Cobalt.
        </p>
      </div>

      <TeamSection developers={developers} contributors={contributors} />
    </main>
  );
}
