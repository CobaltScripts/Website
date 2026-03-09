'use client';

import { useEffect, useState } from 'react';
import User from '@/components/User';

interface Member {
  name: string;
  githubUsername: string;
}

interface TeamSectionProps {
  developers: Member[];
  contributors: Member[];
}

export default function TeamSection({ developers, contributors }: TeamSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const visibilityClass = (delay: number) =>
    `transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const cardClass = `w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]`;

  return (
    <div
      className={`w-full max-w-4xl transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <section className="mb-16 w-full">
        <h2
          className={`mb-6 text-center text-2xl font-bold transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Developers
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-6">
          {developers.map((member, index) => (
            <div
              key={member.githubUsername}
              className={`${cardClass} ${visibilityClass(200 + index * 100)}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <User {...member} role="Developer" />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full">
        <h2
          className={`mb-6 text-center text-2xl font-bold transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${200 + developers.length * 100 + 100}ms` }}
        >
          Contributors
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-6">
          {contributors.map((member, index) => (
            <div
              key={member.githubUsername}
              className={`${cardClass} ${visibilityClass(200 + developers.length * 100 + 200 + index * 100)}`}
              style={{ transitionDelay: `${200 + developers.length * 100 + 200 + index * 100}ms` }}
            >
              <User {...member} role="Contributor" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
