import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client';



const WebSocket = () => {

  const [foo, setFoo] = useState('not login')

  const socket = io("http://localhost:3001");

  socket.emit('login', {
    id: 'hello',
    name: 'haha'
  })

  socket.on('login', (data) => {
    setFoo(data)
  })// 여까지잘됨

  socket.on('message', (data) => {
    console.log(data)
  })

  const disconnect = () => socket.emit('forceDisconnect', 'he')


  socket.on('forceDisconnect', (message) => {
    console.log(message)
  })

  return (
    <div>
      {foo}
      <button onClick={() => disconnect()}>disconnect</button>
    </div>
  );
};

export default WebSocket;