import React from 'react';
import { useSelector } from 'react-redux'

const WhoseTurn = () => {

  const { myTurn } = useSelector(state => state.switchHand)

  return (
    <div>
      {
        myTurn
        ? <h2>내 차례입니다.</h2>
        : <h2>상대방의 차례입니다.</h2>
      }
    </div>
  );
};

export default WhoseTurn;