'use client';

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  Skeleton,
  CardHeader,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const UserCardSkeleton = () => {
  return (
    <Card
      data-testid="loading-user-card"
      aria-label="loading user card"
      className="min-w-96 p-4"
      sx={{
        bgcolor: deepPurple['50'],
        borderColor: deepPurple['100'],
        borderWidth: 4,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" component="h6">
            <Skeleton width="90%" />
          </Typography>
        }
        avatar={<Skeleton variant="circular" height={64} width={64} />}
      />
      <CardContent>
        <Typography variant="h5" component="h5">
          <Skeleton width="85%" />
        </Typography>

        <List>
          {Array.from({ length: 4 }).map((_, index) => (
            <ListItem disablePadding key={index}>
              <ListItemIcon>
                <Skeleton variant="circular" height={40} width={40} />
              </ListItemIcon>
              <ListItemText
                primary={<Skeleton />}
                secondary={index % 2 !== 0 ? <Skeleton width="40%" /> : null}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions disableSpacing className="flex justify-end">
        <Skeleton width="50%" />
      </CardActions>
    </Card>
  );
};

export default UserCardSkeleton;
