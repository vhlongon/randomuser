'use client';

import { Card, CardContent, Container, Typography } from '@mui/material';
import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
};

export default function Error({ error }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <Card color="error">
        <CardContent>
          <Typography variant="h5" component="h1">
            Error
          </Typography>
          <Typography variant="body1" component="p">
            <Container maxWidth="sm" className="mt-2" component="span">
              <code className="">{JSON.stringify(error.message, null, 2)}</code>
            </Container>
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}
