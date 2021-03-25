import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { discard } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const time = useSelector(state => state.switchHand.time)

  let abandonedCards = 
  cards.filter(card => { return card.myHand === false && !card.discard })
  .sort((a, b) => {return a.order - b.order})

  // const fetchDiscard = () => {

  // }

  return (
    <div>
      <h2>버릴 패</h2>
      <div className='CardList-container'>
        {
          abandonedCards.map((card, i) => {
            return (<Card card={card} switchHand = {discard} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;