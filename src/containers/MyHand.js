import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { handToCard } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './MyHand.css'


const MyHand = () => {

  const cards = useSelector(state => state.switchHand.cards)
  const hello = useSelector(state => state.switchHand.hello)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  useEffect(() => {
    console.log('hi')
    forceUpdate()
  }, [hello])

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})
  
  return (
    <div>
      <h2>사용할 패{' '}{trueCards.length} / 13 {hello.myHand}</h2>
      <div className='MyHand-container'>
        {
          trueCards.map((card, i) => {
            return (<Card card={card} key={i} switchHand={handToCard}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default MyHand;