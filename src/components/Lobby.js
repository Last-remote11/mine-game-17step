import React, { useState } from 'react';
import {  useSelector } from 'react-redux'
import { socket } from './WebSocket'

const Lobby = () => {

  const { isTwoUser, myName, opponentName, roomID } = useSelector(state => state.gameState)
  
  const [joinID, setJoinID] = useState('')

  return (
    <div>
      {
        isTwoUser 
        ?
        <div>
          <h4 className='blue'>상대방이 들어왔습니다!</h4>
          <h1>{myName}{' '} VS {' '}{opponentName}</h1>
        </div>
        : 
        <div>
          <input type='text' placeholder='[여기에 방번호 입력]' 
          onChange={(e) => setJoinID(e.target.value)}>
          </input>
          <button onClick={() => socket.emit('joinroom', { joinID: joinID, name: myName })}>방에 참가</button>
          <h4 className='blue'>{roomID}번 방에서 대전 상대를 기다리는 중...</h4>
        </div>
      }
    </div>
  );
};

export default Lobby;