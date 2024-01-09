'use client';
import { Button, Skeleton } from '@mui/material';
import { useState, useTransition } from 'react';
import { Info, User } from '../types';
import { fetchData } from '../utils/data';
import { ErrorCard } from './ErrorCard';
import { UserCard } from './UserCard';
import UserCardSkeleton from './UserCardSkeleton';

export const UserForm = () => {
  const [data, setData] = useState<null | { user: User; info: Info }>(null);
  const [error, setError] = useState<null | string>(null);
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return (
      <div data-testid="loading...">
        <UserCardSkeleton />
        <Skeleton variant="rectangular" width={186} height={50} />
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  const handleAction = () => {
    startTransition(async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : JSON.stringify(error);
        setError(errorMessage);
        console.error(error);
      }
    });
  };

  return (
    <form className="flex flex-col justify-center items-center gap-8">
      {data && <UserCard user={data.user} info={data.info} />}
      <Button
        onClick={handleAction}
        type="button"
        size="large"
        variant="contained"
        color="secondary"
        disabled={isPending}
        aria-disabled={isPending}
      >
        Get random user
      </Button>
    </form>
  );
};
