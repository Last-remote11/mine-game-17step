import React from 'react';
import { useSelector } from 'react-redux'

const WhoseTurn = () => {

  const { myTurn, soon } = useSelector(state => state.switchHand)

  return (
    <div>
      {soon}순
      {
        myTurn
        ? soon===17 ? <h2>마지막 턴입니다. 아무 패나 누르면 유국이 됩니다.</h2> : <h2>내 차례입니다.</h2>
        : <h2>상대방의 차례입니다.</h2>
      }
    </div>
  );
};

export default WhoseTurn;