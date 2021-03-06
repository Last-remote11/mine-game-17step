import React from 'react';
import { useSelector } from 'react-redux'

const WhoseTurn = () => {

  const { myTurn, soon, opponentDiscards, myDiscards } = useSelector(state => state.gameState)
  let howManyCards = opponentDiscards.length + myDiscards.length
  return (
    <div>
      {soon}순
      {
        myTurn
        ? howManyCards === 34 ? <h2>17순이 끝났습니다. 아무 패나 누르면 유국이 됩니다.</h2> : <h2>내 차례입니다.</h2>
        : <h2>상대방의 차례입니다.</h2>
      }
    </div>
  );
};

export default WhoseTurn;