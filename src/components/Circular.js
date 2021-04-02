import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      color: 'blue'
    },
  },
}));

export default function Circular() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress /> 상대방의 결정을 기다리는중...
    </div>
  );
}
