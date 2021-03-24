import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import { changeRoute } from '../actions'
import { useDispatch } from 'react-redux'

const StartButton = () => {

  const dispatch = useDispatch()
  const cards = useSelector(state => state.switchHand.cards)

  const goTo2Phase = () => {
    let trueCards = cards.filter(card => { return card.myHand === true })
    if (trueCards.length === 13) {
      dispatch(changeRoute('phase2'))
    } else {
      alert('13장을 골라주세요')
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => goTo2Phase()}>
        완료
      </Button>
    </div>
  );
};

export default StartButton;