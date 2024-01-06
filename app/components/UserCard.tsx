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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type UserCardProps = {
  user: Pick<
    User,
    'email' | 'name' | 'location' | 'picture' | 'phone' | 'login' | 'dob'
  >;
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
    dob,
  },
  info,
}: UserCardProps) => {
  const address = `${location.street.name}, ${location.city}, ${location.state}`;
  const formattedDate = new Intl.DateTimeFormat().format(new Date(dob.date));

  return (
    <Card
      className="min-w-80 p-4"
      sx={{
        bgcolor: deepPurple['50'],
        borderColor: deepPurple['100'],
        borderWidth: 4,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" component="h2">
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
          component="h1"
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
              address + ', ' + location.country
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
          <UserInfoItem
            icon={<CalendarMonthIcon />}
            primary={formattedDate}
            secondary={`Age: ${dob.age}`}
          />
        </List>
      </CardContent>

      <ExtraInfo {...info} />
    </Card>
  );
};
