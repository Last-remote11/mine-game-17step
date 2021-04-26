import React from 'react';
import { useDispatch } from 'react-redux'
import { doNothing } from '../actions'

const Card = ({ card, onClickCard = doNothing(), width='66px', height='118px' }) => {

  const dispatch = useDispatch()

  return (
      <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
        <img src={card.img} width={width} height={height} alt='card' className='br3 cards' 
        onClick={() => dispatch(onClickCard(card))}/>
      </div>
  );
};
// 66:118
export default Card;