import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './MyHand.css'


const DecidedHand = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const time = useSelector(state => state.switchHand.time)
  
  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})
  
  return (
    <div>
      <h2>내 핸드</h2>
      <div className='MyHand-container'>
        {
          trueCards.map((card, i) => {
            return (<Card card={card} key={i} switchHand={doNothing}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default DecidedHand;