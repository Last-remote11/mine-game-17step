import React from 'react'
import Card from '../components/Card'
import { MockDatabase } from '../components/MockDatabase'
import './MyHand.css'


const CardList = () => {
  return (
    <div>
      <h2>내 핸드</h2>
      <div className='MyHand-container'>
        {
          MockDatabase.map((card, i) => {
            if (card.myHand) {
              return (
                <Card card={card} key={i}></Card>
              )
            }
          })
        }
      </div>
    </div>
  );
};

export default CardList;