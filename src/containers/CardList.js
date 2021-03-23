import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { cardToHand } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const hello = useSelector(state => state.switchHand.hello)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => setTimeout(forceUpdate(),1000), [hello])

  let falseCards = 
  cards.filter(card => { return card.myHand === false })
  .sort((a, b) => {return a.order - b.order})

  return (
    <div>
      <h2>전체 패 혹은 쩌리 패</h2>
      <div className='CardList-container'>
        {
          falseCards.map((card, i) => {
            return (<Card card={card} switchHand = {cardToHand} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;