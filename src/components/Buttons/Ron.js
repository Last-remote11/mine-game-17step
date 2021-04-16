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

  const emitRon = async ( socket ) => {

    const ronCard = opponentDiscards[opponentDiscards.length - 1].order

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
      <Button variant="contained" color="primary" disabled={!myTurn} onClick={() => emitRon(socket)}>
        론
      </Button>
    </div>
  );
};

export default Ron;