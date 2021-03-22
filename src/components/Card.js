import React from 'react';


const Card = ({ card }) => {

  return (
      <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
        <img src={card.img} width='66px' height='118px' alt='card' className='br3' onClick={(event)=> console.log(event)}/>
      </div>
  );
};

export default Card;