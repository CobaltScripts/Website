import User from '@/components/User';
import { team } from '@/data/team';

export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 md:justify-center md:py-0">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">The Team</h1>
        <p className="mt-4 text-muted-foreground">Meet the people behind Cobalt.</p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <User key={member.userId} {...member} />
        ))}
      </div>
    </main>
  );
}
