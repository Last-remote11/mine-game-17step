import React from 'react'
import Card from '../components/Card'
// import { MockDatabase } from '../components/MockDatabase'
import { useSelector } from 'react-redux'
import './MyHand.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)

  return (
    <div>
      <h2>내 핸드</h2>
      <div className='MyHand-container'>
        {
          cards.filter(card => {return card.myHand === true})
          .map((card, i) => {
              return (<Card card={card} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;