import React from 'react';
import UserCardSkeleton from './components/UserCardSkeleton';

export default function LoadingPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <UserCardSkeleton />
    </main>
  );
}
