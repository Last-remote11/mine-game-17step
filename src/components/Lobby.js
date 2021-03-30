import React from 'react';
import { setName } from '../actions' 

const Lobby = () => {

  return (
    <div>
      <input required type='test' placeholder='[여기에 닉네임 입력]' 
      onChange={(e) => setName(e.target.value)}>
      </input>
    </div>
  );
};

export default Lobby;