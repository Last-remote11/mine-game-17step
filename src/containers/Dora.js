import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import './CardList.css'


const CardList = () => {

  const { dora } = useSelector(state => state.gameState)

  return (
    <div className='w-10'>
      <h2>도라(표시패)</h2>
      <div className='Dora-container'>
        <Card card={dora}></Card>
      </div>
    </div>
  );
};

export default CardList;