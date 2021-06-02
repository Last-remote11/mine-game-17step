import React, { useContext } from 'react';
import { useDispatch } from 'react-redux'
import { doNothing } from '../reducer'
import { mobileContext } from '../containers/App'

const Card = ({ card, onClickCard = doNothing() }) => {

  const isMobile = useContext(mobileContext)
  const dispatch = useDispatch()
  const w = window.innerWidth
  const cardWidth = isMobile <= 800 ? w*0.05 : 66
  const cardHeight = cardWidth / 66 * 118

  return (
      <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
        <img src={card.img} width={cardWidth} height={cardHeight} alt='card' className='br3 cards' 
        onClick={() => dispatch(onClickCard(card))}/>
      </div>
  );
};
// 66:118
export default Card;