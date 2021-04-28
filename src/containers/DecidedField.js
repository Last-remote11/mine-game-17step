import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { discard, doNothing } from '../reducer'
import { socket } from '../components/WebSocket'
import './CardList.css'


const CardList = () => {

  const { cards, myTurn } = useSelector(state => state.gameState)
  const dispatch = useDispatch()

  let abandonedCards = 
  cards.filter(card => { return card.myHand === false && !card.discard })
  .sort((a, b) => {return a.order - b.order})

  const checkMyTurn = ( discard ) => {
    if (myTurn) {
      return discard
    } else {
      alert('자네 차례가 아닐세')
      return doNothing()
    }
  }

  return (
    <div>
      <h2>버릴 패</h2>
      <div className='CardList-container'>
        {
          abandonedCards.map((card, i) => {
            return (
            <div className='tc bg-light-blue dib br3 ma1 grow bw2 shadow-5'>
              <img src={card.img} width='66px' height='118px' alt='card' className='br3' 
              onClick={() => dispatch(checkMyTurn(discard(card, socket)))}/>
            </div>)
          })
        }
      </div>
    </div>
  );
};

export default CardList;

