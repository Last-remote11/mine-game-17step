import React from 'react';
import Button from '@material-ui/core/Button';
import { startGameReq } from '../../reducer'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const StartButton = () => {

  const dispatch = useDispatch()

  const { myName, isTwoUser } = useSelector(state => state.gameState)

  const emitStart = ( myName, socket) => {
    socket.emit('login', {
      name: myName
    })
    return dispatch(startGameReq())
  }

  return (
    <div>
      {
        isTwoUser
        ? 
          <Button variant="contained" color="primary" disabled={!isTwoUser} onClick={() => emitStart(myName, socket)}>
            게임 시작!
          </Button>      
        : 
        <div></div>
      }
    </div>
  );
};

export default StartButton;