import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import SignupBody from '../components/SignupBody';
import LoginBody from '../components/LoginBody';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(4),
      width: '25ch',
    },
  },
}));

const Login = () => {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [signupRoute, setSignupRoute] = useState(false);


  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {signupRoute 
        ? <SignupBody modalStyle={modalStyle} classes={classes} setSignupRoute={setSignupRoute}/> 
        : <LoginBody modalStyle={modalStyle} classes={classes} setSignupRoute={setSignupRoute}/>  }
        
      </Modal>
    </div>
  );
}

export default Login
