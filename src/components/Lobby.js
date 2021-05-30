import React, { useState } from 'react';
import {  useSelector } from 'react-redux'
import { socket } from './WebSocket'

const Lobby = () => {

  const { isTwoUser, myName } = useSelector(state => state.gameState)
  
  const [joinID, setJoinID] = useState('')

  return (
    <div>
      {
        isTwoUser 
        ?
        <div></div>
        : 
        <div>
            <input type='text' placeholder='[여기에 방번호 입력]' 
            onChange={(e) => setJoinID(e.target.value)}>
            </input>
            <button onClick={() => socket.emit('joinroom', { joinID: joinID, name: myName })}>방에 참가</button>
          </div>
      }
    </div>
  );
};

export default Lobby;