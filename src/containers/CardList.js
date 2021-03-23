import React from 'react'
import Card from '../components/Card'
// import { MockDatabase } from '../components/MockDatabase'
import { useSelector } from 'react-redux'
import './CardList.css'


const CardList = () => {

  const cards = useSelector(state => state.switchHand.cards)

  return (
    <div>
      <h2>전체 패 혹은 쩌리 패</h2>
      <div className='CardList-container'>
        {
          cards.filter(card => card.myHand === false)
          .map((card, i) => {
              return (
                <Card card={card} key={i}></Card>
              )
          })
        }
      </div>
    </div>
  );
};

export default CardList;