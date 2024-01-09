'use client';

import { Button, Skeleton } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { fetchData } from '../utils/data';
import { ErrorCard } from './ErrorCard';
import { UserCard } from './UserCard';
import UserCardSkeleton from './UserCardSkeleton';

export const UserForm = () => {
  const { data, mutate, isPending, error } = useMutation({
    mutationFn: fetchData,
    onError: error => {
      console.error(error);
    },
  });

  if (isPending) {
    return (
      <div aria-label="loading...">
        <UserCardSkeleton />
        <Skeleton variant="rectangular" width={186} height={50} />
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  return (
    <form className="flex flex-col items-center gap-8">
      {data && <UserCard user={data.user} info={data.info} />}
      <Button
        type="button"
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => mutate()}
      >
        Get random user
      </Button>
    </form>
  );
};
