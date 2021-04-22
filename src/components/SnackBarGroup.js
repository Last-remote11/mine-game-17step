import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SnackBarGroup = () => {
  const classes = useStyles();

  const { isTwoUser, win, lose, myTurn } = useSelector(state => state.switchHand)

  const [isTwoUserSnack, setTwoUserSnack] = useState(false)
  const [winSnack, setWinSnack] = useState(false)
  const [loseSnack, setLoseSnack] = useState(false)
  const [myTurnSnack, setTurnSnack] = useState(false)

  useEffect(() => {
    setTwoUserSnack(isTwoUser)
  }, [isTwoUser])

  useEffect(() => {
    setWinSnack(win)
  }, [win])

  useEffect(() => {
    setLoseSnack(lose)
  }, [lose])

  useEffect(() => {
    setTurnSnack(myTurn)
  }, [myTurn])

  const twoUserClose = () => {
    setTwoUserSnack(false)
  }

  const winClose = () => {
    setWinSnack(false)
  }

  const loseClose = () => {
    setLoseSnack(false)
  }

  const myTurnClose = () => {
    setTurnSnack(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar open={isTwoUserSnack} autoHideDuration={2000} onClose={twoUserClose}>
        <Alert onClose={twoUserClose} severity="info">
          매칭이 성공했습니다.  게임 시작을 눌러주세요.
        </Alert>
      </Snackbar>
      <Snackbar open={myTurnSnack} autoHideDuration={1500} onClose={myTurnClose}>
        <Alert onClose={myTurnClose} severity="info">
          내 차례입니다.
        </Alert>
      </Snackbar>
      <Snackbar open={winSnack} autoHideDuration={2000} onClose={winClose}>
        <Alert onClose={winClose} severity="success">
          승리!
        </Alert>
      </Snackbar>
      <Snackbar open={loseSnack} autoHideDuration={2000} onClose={loseClose}>
        <Alert onClose={loseClose} severity="success">
          패배.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBarGroup
