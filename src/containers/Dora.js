import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { doNothing } from '../actions'
import './CardList.css'


const CardList = () => {

  const dora = useSelector(state => state.switchHand.dora)

  return (
    <div className='w-10'>
      <h2>도라</h2>
      <div className='Dora-container'>
        <Card card={dora} switchHand = {doNothing}></Card>
      </div>
    </div>
  );
};

export default CardList;