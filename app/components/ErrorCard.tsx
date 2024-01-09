import ErrorIcon from '@mui/icons-material/Error';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export const ErrorCard = ({
  error,
}: {
  error: Error & { digest?: string };
}) => {
  return (
    <Card
      className="min-w-96 p-4"
      sx={{
        color: red['500'],
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" component="h1">
            Error
          </Typography>
        }
        avatar={<ErrorIcon color="error" />}
      />
      <CardContent>
        <Typography component="p">
          <code>{error.message}</code>
        </Typography>
      </CardContent>
    </Card>
  );
};
