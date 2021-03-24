import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const hello = useSelector(state => state.switchHand.hello)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => setTimeout(forceUpdate(), 1000), [hello])

  let discardedCards = 
  cards.filter(card => { return card.discard === true })

  return (
    <div>
      <h2>버려진 패들</h2>
      <div className='CardList-container'>
        {
          discardedCards.map((card, i) => {
            return (<Card card={card} switchHand = {doNothing} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;