'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
};

export default function Error({ error }: ErrorPageProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-8">
      <Card color="error">
        <CardContent>
          <Typography variant="h5" component="h5">
            Error
          </Typography>
          <Typography variant="body1" component="p">
            <Container maxWidth="sm" className="mt-2">
              <code className="">{JSON.stringify(error.message, null, 2)}</code>
            </Container>
          </Typography>
        </CardContent>
        <CardActions className="justify-end">
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              router.refresh();
            }}
          >
            Try to reload
          </Button>
        </CardActions>
      </Card>
    </main>
  );
}
