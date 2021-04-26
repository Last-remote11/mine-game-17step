import React from 'react';
import Button from '@material-ui/core/Button';
import { ron } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../WebSocket'

const Draw = () => {

  const dispatch = useDispatch()

  const { opponentDiscards, myTurn, cards, oya, soon } = useSelector(state => state.gameState)

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})

  const emitDraw = async ( socket ) => {

    let tiles = []
    for (var i of trueCards) {
      tiles.push(i.order)
    }
    
    socket.emit('draw', {tiles, oya})
    dispatch(draw())
  }


  return (
    <div>
      <Button variant="contained" color="secondary" disabled={soon !== 34} onClick={() => Draw(socket)}>
        유국
      </Button>
    </div>
  );
};

export default Draw;