import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  Typography,
} from '@mui/material';
import { Info, User } from '../types';
import { ExtraInfo } from './ExtraInfo';
import { UserInfoItem } from './UserInfoItem';
import { deepPurple } from '@mui/material/colors';

type UserCardProps = {
  user: User;
  info: Info;
};
export const UserCard = ({
  user: {
    login: { username },
    name,
    email,
    location,
    picture,
    phone,
  },
  info,
}: UserCardProps) => {
  const address = `${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;

  return (
    <Card
      className="min-w-80"
      sx={{
        bgcolor: deepPurple['50'],
        borderColor: deepPurple['100'],
        borderWidth: 4,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" component="h6">
            {username}
          </Typography>
        }
        avatar={
          <Avatar
            alt={`${name.first} ${name.last}`}
            src={picture.thumbnail}
            sx={{
              width: 64,
              height: 64,
              borderColor: deepPurple['200'],
              borderWidth: 4,
            }}
          />
        }
      ></CardHeader>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          className="flex items-end gap-2"
        >
          <Typography variant="subtitle1" component="span">
            {name.title}.
          </Typography>
          <span>
            {name.first} {name.last}
          </span>
        </Typography>
        <List>
          <UserInfoItem
            href={`mailto:${email}`}
            icon={<EmailIcon />}
            primary={email}
          />
          <UserInfoItem
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            icon={<HomeIcon />}
            primary={`${location.street.name}, ${location.city}`}
            secondary={location.country}
          />
          <UserInfoItem
            href={`tel:${phone}`}
            icon={<PhoneIcon />}
            primary={phone}
          />
        </List>
      </CardContent>

      <ExtraInfo {...info} />
    </Card>
  );
};
