import React from 'react'
import Card from '../components/Card'
import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {
  return (
    <div>
      <h2>전체 패 혹은 쩌리 패</h2>
      <div className='CardList-container'>
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
    </div>
  );
};

export default CardList;