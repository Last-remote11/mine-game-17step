import React, { useContext } from 'react';
import { useDispatch } from 'react-redux'
import { doNothing } from '../reducer'
import { mobileContext } from '../containers/App'

const Card = ({ card, onClickCard = doNothing(), width=66, height=118 }) => {

  const isMobile = useContext(mobileContext)
  const dispatch = useDispatch()
  const w = window.innerWidth
  width = isMobile ? w*0.05 : width
  height = width / 66 * 118

  return (
      <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
        <img src={card.img} width={width} height={height} alt='card' className='br3 cards' 
        onClick={() => dispatch(onClickCard(card))}/>
      </div>
  );
};
// 66:118
export default Card;