import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  opponentDecide, opponentDiscard, oneUser, twoUser, startSuccess,
  opponentAccept, win, lose, draw } from '../reducer'
import { initialRoomID } from '../reducer'
import { io } from 'socket.io-client'
import { API_URL } from '../containers/App'

export const socket = io(API_URL + '/');

const WebSocket = () => {

  const [, setConnected] = useState(false);
  const dispatch = useDispatch()

  const { myName } = useSelector(state => state.gameState)
  const { login } = useSelector(state => state.auth)

  useEffect(() => {
    if (login) {
      socket.emit('joinroom', { joinID: initialRoomID, name: myName });
      const eventHandler = () => setConnected(true);
      socket.on('joined', eventHandler);
      return () => {
        socket.off('joined', eventHandler);
      };
    }
  }, [dispatch]);


  useEffect(()=> { // 유저 안모임(방에 1명있다)
    socket.on('oneUser', () => {
      return dispatch(oneUser())
    })
  }, [dispatch])

  useEffect(()=> { // 유저 모임
    socket.on('twoUser', (data) => {
      dispatch(twoUser(data))
    })
  }, [dispatch])
  
  useEffect(()=> { // 방꽉참
    socket.on('fullRoom', () => {
      alert('이미 다 찬 방입니다.')
    })
  }, [dispatch])

  useEffect(()=> { // 게임 시작
    socket.on('login', (data) => {
      dispatch(startSuccess(data))
    })
  }, [dispatch])


  useEffect(()=> {
    socket.on('forceDisconnect', (message) => {
      alert(message)
    })
  }, [dispatch])


  useEffect(()=> {
    socket.on('opponentDecide', () => {
      return dispatch(opponentDecide())
    })
  }, [dispatch])
 

  useEffect(()=> {
    socket.on('opponentDiscard', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [dispatch])
  
  useEffect(()=> { // 론성공 or 촌보
    socket.on('win', (yakuNameArrAndPoint) => {
      console.log('win')
      console.log(yakuNameArrAndPoint)
      dispatch(win(yakuNameArrAndPoint))
    })
  }, [dispatch])
  
  useEffect(()=> { // 쏘임
    socket.on('lose', (yakuNameArrAndPoint) => {
      console.log('lose')
      console.log(yakuNameArrAndPoint)
      dispatch(lose(yakuNameArrAndPoint))
    })
  }, [dispatch])
  
  useEffect(()=> { // 유국
    socket.on('draw', () => {
      dispatch(draw())
    })
  }, [dispatch])
  
  useEffect(()=> {
    socket.on('opponentAccept', () => {
      dispatch(opponentAccept())
    })
  }, [dispatch])

  useEffect(()=> { // 최종승리
    socket.on('finalWin', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [dispatch])

  useEffect(()=> { // 최종패배
    socket.on('finalLose', (card) => {
      dispatch(opponentDiscard(card))
    })
  }, [dispatch])

  useEffect(()=> { // 최종패배
    socket.on('playerLeft', () => {
      alert('상대방과의 연결이 끊어졌습니다.')
      setTimeout(window.location.reload(), 3000)
    })
  }, [dispatch])


  return (
    <div>
    </div>
  );
};

export default WebSocket;