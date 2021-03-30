import React from 'react';
import Button from '@material-ui/core/Button';
import { startGame } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const StartButton = () => {

  const dispatch = useDispatch()

  const myName = useSelector(state => state.switchHand.myName)

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => dispatch(startGame(myName))}>
        게임 시작!
      </Button>
    </div>
  );
};

export default StartButton;