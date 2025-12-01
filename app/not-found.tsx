import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">Page not found</p>
      <Button variant="outline" className="mt-6" asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  );
}
