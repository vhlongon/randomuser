'use client';

import { Card, CardContent, Container, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';

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
      <Card>
        <CardContent sx={{ color: red['500'] }}>
          <Typography variant="h5" component="h1">
            Error
          </Typography>
          <Typography variant="body1" component="p">
            <Container maxWidth="sm" className="mt-2" component="span">
              <code className="">{error.message}</code>
            </Container>
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}
