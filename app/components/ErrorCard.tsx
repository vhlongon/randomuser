import { Card, CardContent, Container, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

type ErrorCardProps = {
  error: string;
};

export const ErrorCard = ({ error }: ErrorCardProps) => {
  return (
    <Card>
      <CardContent sx={{ color: red['500'] }}>
        <Typography variant="h5" component="h1">
          Error
        </Typography>
        <Typography variant="body1" component="p">
          <Container maxWidth="sm" className="mt-2" component="span">
            <code className="">{error}</code>
          </Container>
        </Typography>
      </CardContent>
    </Card>
  );
};
