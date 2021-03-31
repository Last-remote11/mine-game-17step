import React, { useState } from 'react';
import { setName, socket, setRoomID } from '../actions' 
import { useDispatch, useSelector } from 'react-redux'


const Lobby = () => {

  const dispatch = useDispatch()
  const roomID = useSelector(state => state.switchHand.roomID)
  
  const [joinID, setJoinID] = useState('')

  socket.emit('join', roomID)

  const createRoom = () => {
    socket.emit('connection')
  }

  return (
    <div>
      <input required type='text' placeholder='[여기에 닉네임 입력]' 
      onChange={(e) => dispatch(setName(e.target.value))}>
      </input>
      <input type='text' placeholder='[여기에 room ID 입력]' 
      onChange={(e) => setJoinID(e.target.value)}>
      </input>
      <br/>
      <button onClick={() => console.log('방만들기')}>방 만들기</button>
      <button onClick={() => socket.emit('join', joinID)}>방에 참가</button>
    </div>
  );
};

export default Lobby;