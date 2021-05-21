import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import './CardList.css'


const CardList = () => {

  const { myDiscards } = useSelector(state => state.gameState)

  return (
    <div>
      <h2>내가 버린 패</h2>
      <div className='MyDiscard-container'>
        {
          myDiscards.map((card, i) => {
            return (<Card card={card} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;