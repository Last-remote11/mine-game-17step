import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { handToCard } from '../reducer'


const MyHand = () => {

  const { cards } = useSelector(state => state.gameState)

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})
  
  return (
    <div>
      <h2>사용할 패{' '}{trueCards.length} / 13 </h2>
      <div className='MyHand-container'>
        {
          trueCards.map((card, i) => {
            return (<Card card={card} key={i} onClickCard={handToCard}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default MyHand;