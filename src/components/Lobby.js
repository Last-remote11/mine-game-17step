import React, { useState } from 'react';
import { setName, setRoomID } from '../actions' 
import { useDispatch, useSelector } from 'react-redux'
import { socket } from './WebSocket'

const Lobby = () => {

  const dispatch = useDispatch()
  const roomID = useSelector(state => state.switchHand.roomID)
  
  const [joinID, setJoinID] = useState('')

  

  return (
    <div>
      {/* <input required type='text' placeholder='[여기에 닉네임 입력]' 
      onChange={(e) => dispatch(setName(e.target.value))}>
      </input> */}
      <input type='text' placeholder='[여기에 room ID 입력]' 
      onChange={(e) => setJoinID(e.target.value)}>
      </input>
      <button onClick={() => socket.emit('joinroom', joinID)}>방에 참가</button>
    </div>
  );
};

export default Lobby;