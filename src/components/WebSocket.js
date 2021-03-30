import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { socket, opponentDecide, itsMyTurn, setRoomID } from '../actions'


const WebSocket = () => {

  const dispatch = useDispatch()

  socket.on('connection', (roomID) => {
    console.log(roomID)
    dispatch(setRoomID(roomID))
  })

  socket.on('forceDisconnect', (message) => {
    console.log(message)
  })

  // socket.on('opponentDiscard', (card) => {

  // })

  socket.on('opponentDecide', () => {
    dispatch(opponentDecide)
  })

  return (
    <div>
      <button onClick={() => dispatch(itsMyTurn())}>강제로 턴 가져오기(테스트)</button>
    </div>
  );
};

export default WebSocket;