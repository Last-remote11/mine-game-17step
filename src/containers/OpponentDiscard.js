import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const OpponentDiscard = () => {

  const opponentDiscardsArray = useSelector(state => state.switchHand.opponentDiscards)

  return (
    <div>
      <h2>상대가 버린 패</h2>
      <div className='Discard-container'>
        { 
            opponentDiscardsArray.map((card, i) => {
            return (<Card card={card} switchHand = {doNothing} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default OpponentDiscard;