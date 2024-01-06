'use client';

import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Link from 'next/link';
import { ReactNode } from 'react';

type UserInfoItemProps = {
  href: string;
  icon: ReactNode;
  primary: string;
  secondary?: string;
};

export const UserInfoItem = ({
  href,
  icon,
  primary,
  secondary,
}: UserInfoItemProps) => {
  return (
    <ListItem disablePadding>
      <Link href={href} passHref className="flex items-center">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepPurple['500'] }}>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </Link>
    </ListItem>
  );
};
