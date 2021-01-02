import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '90px',
    minWidth: '100px',
    backgroundColor: '#90caf9',
    color: "#0d47a1",
    '&:hover': {
      cursor: 'pointer'
    }
  },
  selected: {
    maxHeight: '90px',
    minWidth: '100px',
    backgroundColor: "#0d47a1",
    color: theme.palette.primary.contrastText,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  title: {
    fontSize: 14,
  },
  number : {
    marginTop: theme.spacing(1),
    fontSize: 30,
    marginBottom: theme.spacing(0)
  }
}));

export default function TopCard({selected, name, count, setClickedCard}) {
  const classes = useStyles();

  const clickHandler = () => {
    setClickedCard(name);
  }

  return (
    <Card className={selected === name ? classes.selected : classes.root} color="default" onClick={clickHandler}>
      <CardContent>
        <Typography className={classes.title} align="left" variant="h6" gutterBottom>
          <b>{name}</b>
        </Typography>
        <Typography className={classes.number} align="center" variant="h5">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}