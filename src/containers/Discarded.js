import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const time = useSelector(state => state.switchHand.time)

  let discardCards = 
  cards.filter(card => { return card.discard === true })
  .sort((a, b) => {return a.order - b.order})

  return (
    <div>
      <h2>버려진 패들</h2>
      <div className='Discard-container'>
        {
          discardCards.map((card, i) => {
            return (<Card card={card} switchHand = {doNothing} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;