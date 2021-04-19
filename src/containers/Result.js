import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { socket } from '../components/WebSocket'
import { accept } from '../actions'
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60vm',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const getModalStyle = {
  top: '10%',
  left: '30%',
  right:'30%'
}

const Result = () => {

  const { resultTiles, point, yakuNameArr, uradora, gameEnd, myTurn, yakuman, pan, win, resultCards, myScore, draw } = useSelector(state => state.switchHand)
  const dispatch = useDispatch()
  
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
    socket.emit('accept')
    dispatch(accept())
    // gameEnd를 false로
    // 점수제외 게임 초기화
    // emit?
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      {
        win
        ? <h1>인생의 승리자</h1>
        : <h1>쳐발림</h1>
      }
      <div className='Result-container'>
        {resultCards.map(e => {
          return(      
          <div className='tc dib br3 ma1 bw2 shadow-5'>
            <img src={e.img} width='33px' height='59px' alt='card' className='br3 cards'/>
          </div>)}
        )}
      </div>
      <hr />
      <div>
        {yakuNameArr.map(yakuName => {
          return (<h4>{yakuName}</h4>)
        })}
      <hr />
      {
        yakuman === 1
        ? <h1>역만 32000점</h1>
        : <h3>{pan}판 {point}점</h3>
      }
        
      </div>
        <h4>{myScore - point}{' '}→{' '}{myScore}점 </h4>

    {/* 타이틀 : 인생의 승리자 or 쳐발림 or 유국*/}
    {/* 패, 역, 점수 */}
    </div>
  )

  const drawBody = (
    <div style={modalStyle} className={classes.paper}>
      <h1>유국</h1>
    </div>
  )

  return (
    <div>
      <Modal
        open={gameEnd} // gameEnd?
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {draw ? drawBody : body}
      </Modal>
    </div>
  );
};

export default Result;