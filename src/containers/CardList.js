import React from 'react'
import Card from '../components/Card'
import { MockDatabase } from '../components/MockDatabase'
import "./CardList.css"


const CardList = () => {
  return (
    <div className='container'>
      {
        MockDatabase.map((card, i) => {
          if (!card.myHand) {
            return (
              <Card card={card} key={i}></Card>
            )
          }
        })
      }
    </div>
  );
};

export default CardList;