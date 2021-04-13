import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { opponentDecide, opponentDiscard, itsMyTurn, setRoomID, oneUser, twoUser, startSuccess,
   opponentAccept, win, lose } from '../actions'
import { initialRoomID } from '../reducer'
import { io } from 'socket.io-client'

export const socket = io("http://localhost:3001");

const WebSocket = () => {

  const dispatch = useDispatch()

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.emit('joinroom', initialRoomID);
    const eventHandler = () => setConnected(true);
    socket.on('joined', eventHandler);
    return () => {
        socket.off('joined', eventHandler);
    };
  }, []);


  useEffect(()=> { // 유저 안모임(방에 1명있다)
    socket.on('oneUser', () => {
      dispatch(oneUser())
    })
  }, [])

  useEffect(()=> { // 유저 모임
    socket.on('twoUser', () => {
      dispatch(twoUser())
    })
  }, [])
  
  useEffect(()=> { // 방꽉참
    socket.on('fullRoom', () => {
      alert('이미 다 찬 방입니다.')
    })
  }, [])

  useEffect(()=> { // 게임 시작
    socket.on('login', (data) => {
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
      dispatch(opponentDiscard(card))
    })
  }, [])
  
  useEffect(()=> { // 론성공 or 촌보
    socket.on('win', (yakuNameArrAndPoint) => {
      console.log('win')
      console.log(yakuNameArrAndPoint)
      dispatch(win(yakuNameArrAndPoint))
    })
  }, [])
  
  useEffect(()=> { // 쏘임
    socket.on('lose', (yakuNameArrAndPoint) => {
      console.log('lose')
      console.log(yakuNameArrAndPoint)
      dispatch(lose(yakuNameArrAndPoint))
    })
  }, [])
  
  useEffect(()=> { // 유국
    socket.on('draw', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [])
  
  useEffect(()=> {
    socket.on('opponentAccept', () => {
      dispatch(opponentAccept())
    })
  }, [])

  useEffect(()=> { // 최종승리
    socket.on('finalWin', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [])

  useEffect(()=> { // 최종패배
    socket.on('finalLose', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [])

  return (
    <div>
    </div>
  );
};

export default WebSocket;