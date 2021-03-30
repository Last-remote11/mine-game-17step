import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const time = useSelector(state => state.switchHand.time)
  const opponentDecide = useSelector(state => state.switchHand.opponentDecide)

  const waitPlease = () => {
   return <div>상대방이 패를 결정할 때까지 기다려주세요</div>
  }

  let discardCards = 
  cards.filter(card => { return card.discard === true })
  .sort((a, b) => {return a.order - b.order})

  return (
    <div>
      <h2>버려진 패들</h2>
      <div className='Discard-container'>
        {
          opponentDecide 
          ? waitPlease
          : discardCards.map((card, i) => {
            return (<Card card={card} switchHand = {doNothing} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;