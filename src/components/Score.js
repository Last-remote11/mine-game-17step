import React from 'react';
import { useSelector } from 'react-redux'

const Score = () => {

  const myScore = useSelector(state => state.switchHand.myScore)
  const opponentScore = useSelector(state => state.switchHand.opponentScore)

  return (
    <table>
      <tr>
        <th>내점수</th>
        <th>상대점수</th>
      </tr>
      <tr>
        <th>{myScore}</th>
        <th>{opponentScore}</th>
      </tr>
    </table>
  );
};

export default Score;