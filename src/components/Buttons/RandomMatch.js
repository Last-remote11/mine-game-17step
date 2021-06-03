import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const StartButton = () => {

  const { myName, isTwoUser } = useSelector(state => state.gameState)


  return (
    <div>
      {
        isTwoUser
        ? <></>
        : 
          <Button variant="contained" color="primary" disabled={isTwoUser}
          onClick={() => socket.emit('randomMatch', { name: myName })}>
            무작위 매치
          </Button>      
        
      }
    </div>
  );
};

export default StartButton;