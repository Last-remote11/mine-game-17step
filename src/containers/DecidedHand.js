import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../reducer'


const DecidedHand = () => {

  const { cards } = useSelector(state => state.gameState)
  
  // 내가 고른 카드들
  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})
  
  return (
    <div>
      <h2>내 패</h2>
      <div className='MyHand-container'>
        {
          trueCards.map((card, i) => {
            return (<Card card={card} key={i} onClickCard={doNothing}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default DecidedHand;