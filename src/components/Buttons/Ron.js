import React from 'react';
import Button from '@material-ui/core/Button';
import { ron } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const Ron = () => {

  const dispatch = useDispatch()

  const { opponentDiscards, myTurn, cards, oya, soon } = useSelector(state => state.switchHand)

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})

  let myDiscardCards = // 내가 버린 패(후리텐확인용)
  cards.filter(card => { return card.discard === true })
  .sort((a, b) => {return a.order - b.order})

  const emitRon = ( socket ) => {

    const ronCard = opponentDiscards[opponentDiscards.length - 1].order
    console.log(opponentDiscards.slice(0, opponentDiscards.length - 1))

    if (
      opponentDiscards.slice(0, opponentDiscards.length - 1).map(e => e.order).includes(ronCard) ||
      myDiscardCards.map(e => e.order).includes(ronCard)
    ) {
      alert('후리텐입니다')
      return
    }

    let tiles = []
    for (var i of trueCards) {
      tiles.push(i.order)
    }
    tiles.push(ronCard)
    
    socket.emit('ron', {tiles, ronCard, oya, soon})
    dispatch(ron())

  }


  return (
    <div>
      <Button variant="contained" color="primary" disabled={!myTurn || ( oya && soon === 0 )} onClick={() => emitRon(socket)}>
        론
      </Button>
    </div>
  );
};

export default Ron;