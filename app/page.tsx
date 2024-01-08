'use client';

import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { UserCard } from './components/UserCard';
import ErrorPage from './error';
import LoadingPage from './loading';
import { fetchData } from './utils/data';

export default function Home() {
  const { data, isLoading, refetch, isFetching, error } = useQuery({
    queryFn: fetchData,
    queryKey: ['user'],
    enabled: false,
  });

  if (isLoading || isFetching) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      {data && <UserCard user={data.user} info={data.info} />}
      <Button
        type="button"
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => refetch()}
      >
        Get random user
      </Button>
    </main>
  );
}
