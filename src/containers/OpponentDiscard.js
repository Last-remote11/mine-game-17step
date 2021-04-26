import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import './CardList.css'


const OpponentDiscard = () => {

  const { opponentDiscards } = useSelector(state => state.gameState)

  return (
    <div>
      <h2>상대가 버린 패</h2>
      <div className='Discard-container'>
        { 
            opponentDiscards.map((card, i) => {
            return (<Card card={card} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default OpponentDiscard;