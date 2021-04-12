import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const WaitBackdrop = () => {

  const { pending } = useSelector(state => state.switchHand)

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={pending}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default WaitBackdrop;