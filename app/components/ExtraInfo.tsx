'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button,
  CardActions,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { Info } from '../types';

export const ExtraInfo = (props: Info) => {
  const [expanded, setExpanded] = useState(false);

  const text = `${expanded ? 'Hide' : 'Show'} extra info`;
  return (
    <>
      <CardActions disableSpacing className="flex justify-end">
        <Button
          variant="text"
          size="small"
          color="inherit"
          onClick={() => setExpanded(x => !x)}
          endIcon={
            <ExpandMoreIcon
              className={`transform ${expanded ? 'rotate-180' : ''}`}
            />
          }
        >
          {text}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            {Object.entries(props).map(([key, value]) => (
              <ListItem disablePadding key={key}>
                <ListItemText secondary={`${key}: ${value}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </>
  );
};
