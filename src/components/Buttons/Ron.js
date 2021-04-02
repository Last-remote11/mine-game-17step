import React from 'react';
import Button from '@material-ui/core/Button';
import { ron } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const Ron = () => {

  const dispatch = useDispatch()

  const { opponentDiscards, myTurn, cards } = useSelector(state => state.switchHand)

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})

  const emitRon = async ( socket ) => {

    trueCards.push(opponentDiscards[opponentDiscards.length - 1])

    console.log(trueCards)

    socket.emit('ron', (trueCards))
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