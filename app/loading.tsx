import React from 'react';
import UserCardSkeleton from './components/UserCardSkeleton';
import { Skeleton } from '@mui/material';

export default function LoadingPage() {
  return (
    <main
      aria-label="loading..."
      className="flex min-h-screen flex-col justify-center items-center p-24 gap-8"
    >
      <UserCardSkeleton />
      <Skeleton variant="rectangular" width={186} height={50} />
    </main>
  );
}
