import React from 'react';
import Button from '@material-ui/core/Button';
import { startGameReq } from '../../reducer'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const StartButton = () => {

  const dispatch = useDispatch()

  const { myName, opponentName, isTwoUser } = useSelector(state => state.gameState)

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
        ? <div>
          <h4 className='blue'>상대방이 들어왔습니다!</h4>
          <h1>{myName}{' '} VS {' '}{opponentName}</h1>
          <Button variant="contained" color="primary" disabled={!isTwoUser} onClick={() => emitStart(myName, socket)}>
            게임 시작!
          </Button>
          </div>        
        : <div><h4 className='blue'>대전 상대를 기다리는 중...</h4></div>
      }
    </div>
  );
};

export default StartButton;