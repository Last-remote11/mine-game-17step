import React from 'react';
import Button from '@material-ui/core/Button';
import { startGame } from '../actions'
import { useDispatch } from 'react-redux'

const StartButton = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => dispatch(startGame())}>
        게임 시작!
      </Button>
    </div>
  );
};

export default StartButton;