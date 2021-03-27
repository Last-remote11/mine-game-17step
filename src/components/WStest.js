import React, { useState, useEffect, useRef } from 'react'
import WebSocket from 'socket.io-client'


const AppWs = () => {
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
      ws.current = new WebSocket("http://localhost:3001");
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      return () => {
          ws.current.close();
      };
  }, []);

  useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = e => {
          if (isPaused) return;
          const message = JSON.parse(e.data);
          console.log("e", message);
      };
  }, [isPaused]);

  return (
      <div>
          <button onClick={() => setPause(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
          </button>
      </div>
  );
}

export default AppWs