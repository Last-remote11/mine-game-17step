import React from 'react';
import { useSelector } from 'react-redux'

const ScoreBoard = () => {

  const { myScore, opponentScore, oya, myName, opponentName } = useSelector(state => state.gameState)


  return (
    <table style={{fontsize: '30px'}}>
      <tbody>
      <tr>
        <th>{myName}{' '}{oya ? '東' : '西'}</th>
        <th>{opponentName}{' '}{oya ? '西' : '東'}</th>
      </tr>
      <tr>
        <th>{myScore}</th>
        <th>{opponentScore}</th>
      </tr>
      </tbody>
    </table>
  );
};

export default ScoreBoard;