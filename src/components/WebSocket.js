import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { socket, opponentDecide, itsMyTurn, setRoomID, oneUser, twoUser } from '../actions'
import { initialRoomID } from '../reducer'


const WebSocket = () => {

  const dispatch = useDispatch()

  socket.emit('join', initialRoomID)

  socket.on('forceDisconnect', (message) => {
    console.log(message)
  })

  // socket.on('opponentDiscard', (card) => {

  // })

  socket.on('fullRoom', () => {
    alert('이미 다 찬 방입니다.')
  })

  socket.on('opponentDecide', () => {
    dispatch(opponentDecide)
  })

  socket.on('oneUser', () => {
    dispatch(oneUser)
  })

  socket.on('twoUser', () => {
    dispatch(twoUser)
    alert('HERE COMES A NEW CHALLENGER !')
  })
  
  socket.on('fullUser', () => {
    alert('이미 찬 방입니다.')
  })

  return (
    <div>
      <button onClick={() => dispatch(itsMyTurn())}>강제로 턴 가져오기(테스트)</button>
    </div>
  );
};

export default WebSocket;