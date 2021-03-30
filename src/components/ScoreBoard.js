import React from 'react';
import { useSelector } from 'react-redux'

const ScoreBoard = () => {

  const { myScore, opponentScore, myName } = useSelector(state => state.switchHand)

  return (
    <table>
      <tr>
        <th>{myName}</th>
        <th>상대점수</th>
      </tr>
      <tr>
        <th>{myScore}</th>
        <th>{opponentScore}</th>
      </tr>
    </table>
  );
};

export default ScoreBoard;