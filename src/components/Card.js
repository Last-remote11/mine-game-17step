import React from 'react';
import { useDispatch } from 'react-redux'

const Card = ({ card, switchHand }) => {

  const dispatch = useDispatch()

  return (
      <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
        <img src={card.img} width='66px' height='118px' alt='card' className='br3 cards' 
        onClick={() => dispatch(switchHand(card))}/>
      </div>
  );
};
// 66:118
export default Card;