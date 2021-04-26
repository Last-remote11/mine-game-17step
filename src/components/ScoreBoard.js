import React from 'react';
import { useSelector } from 'react-redux'

const ScoreBoard = () => {

  const { myScore, opponentScore, oya } = useSelector(state => state.gameState)


  return (
    <table style={{fontsize: '20px'}}>
      <tbody>
      <tr>
        <th>내점수{oya ? '東' : '西'}</th>
        <th>상대점수{oya ? '西' : '東'}</th>
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