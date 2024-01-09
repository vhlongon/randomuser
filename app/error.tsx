'use client';

import { useEffect } from 'react';
import { ErrorCard } from './components/ErrorCard';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
};

export default function ErrorPage({ error }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <ErrorCard error={error.message} />
    </main>
  );
}
