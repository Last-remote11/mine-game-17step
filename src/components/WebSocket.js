import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { opponentDecide, itsMyTurn, setRoomID, oneUser, twoUser, startSuccess } from '../actions'
import { initialRoomID } from '../reducer'
import { io } from 'socket.io-client'

export const socket = io("http://localhost:3001");

const WebSocket = () => {

  const dispatch = useDispatch()

  const [connected, setConnected] = useState(false);

  // useEffect(() => {
  //   socket.emit('joinroom', initialRoomID);
  //   const eventHandler = () => setConnected(true);
  //   socket.on('joined', eventHandler);
  //   return () => {
  //       socket.off('joined', eventHandler);
  //   };
  // }, []);
  useEffect(()=> {
    socket.on('fullRoom', () => {
      alert('이미 다 찬 방입니다.')
    })
  }, [])

  useEffect(()=> { // 유저 모임
    socket.on('twoUser', () => {
      socket.off('twoUser')
      dispatch(twoUser())
    })
  }, [])

  useEffect(()=> { // 게임 시작
    socket.once('login', (data) => {
      dispatch(startSuccess(data))
    })
  }, [])


  useEffect(()=> {
    socket.on('forceDisconnect', (message) => {
      console.log(message)
    })
  }, [])


  useEffect(()=> {
    socket.on('opponentDecide', () => {
      dispatch(opponentDecide())
    })
  }, [])
 

  useEffect(()=> {
    socket.on('opponentDiscard', (card) => {

    })
  }, [])







  return (
    <div>
      <button onClick={() => dispatch(itsMyTurn())}>강제로 턴 가져오기(테스트)</button>
    </div>
  );
};

export default WebSocket;