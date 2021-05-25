import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import { meDecide } from '../../reducer'
import { useDispatch } from 'react-redux'
import { socket } from '../WebSocket'

const DecideButton = () => {

  const dispatch = useDispatch()
  const { cards } = useSelector(state => state.gameState)

  const goTo2Phase = () => {
    let trueCards = cards.filter(card => { return card.myHand === true })
    if (trueCards.length === 13) {
      dispatch(meDecide())
      socket.emit('decide', true)
    } else {
      alert('13장을 골라주세요')
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => goTo2Phase()}>
        패 선택 완료
      </Button>
    </div>
  );
};

export default DecideButton;