import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { cardToHand } from '../reducer'
import './CardList.css'


const CardList = () => {

  const { cards } = useSelector(state => state.gameState)

  let falseCards = 
    cards.filter(card => { return card.myHand === false })
    .sort((a, b) => {return a.order - b.order})

  return (
    <div className='w-90'>
      <h2>제외할 패</h2>
      <div className='CardList-container'>
        {
          falseCards.map((card, i) => {
            return (<Card card={card} onClickCard = {cardToHand} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;