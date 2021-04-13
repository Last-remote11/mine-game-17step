import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
// import { MockDatabase } from '../components/MockDatabase'
import './CardList.css'


const CardList = () => {

  const myDiscardsArray = useSelector(state => state.switchHand.myDiscards)

  return (
    <div>
      <h2>내가 버린 패</h2>
      <div className='Discard-container'>
        {
          myDiscardsArray.map((card, i) => {
            return (<Card card={card} switchHand = {doNothing} key={i}></Card>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;