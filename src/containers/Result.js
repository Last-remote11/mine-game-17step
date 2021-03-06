import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { socket } from '../components/WebSocket'
import Card from '../components/Card'
import { accept } from '../reducer'
import Modal from '@material-ui/core/Modal'
import { mobileContext } from '../containers/App'





const Result = () => {

  const isMobile = useContext(mobileContext)

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: isMobile ? '80%' : '40%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: 'scroll'
    },
  }));
  
  const getModalStyle = {
    top: isMobile ? '5%' : '10%',
    bottom: isMobile ? '5%' : '',
    left: isMobile ? '10%' : '30%',
    right: isMobile ? '10%' : '30%'
  }

  const { 
    point, 
    yakuNameArr, 
    uradora, 
    gameEnd, 
    yakuman, 
    pan, 
    win, 
    resultCards, 
    myScore, 
    draw
   } = useSelector(state => state.gameState)
  const dispatch = useDispatch()
  
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);


  const handleClose = () => {
    socket.emit('accept')
    dispatch(accept())
    // gameEnd를 false로
    // 점수제외 게임 초기화
    // emit?
  };

  const UradoraImg = (uradora) => {
    return (
      <div className='tc dib br3 ma1 bw2 shadow-5'>
        <img src={uradora.img} width='39.6px' height='70.8px' alt='card' className='br3 cards'/> 
      </div>
    )
  }

  const yakumanText = {
    1: '역만',
    2: '더블역만',
    3: '3배역만',
    4: '4배역만'
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {point === -8000
      ? <h1>촌보</h1>
      : win
        ? <h1>인생의 승리자</h1>
        : <h1>쳐발림</h1>
      }
      <div className='Result-container'>
        {resultCards.map((card, i) => {
          return(
            <Card card={card} width={39.6} height={70.8} key={i}></Card>
          
          // <div className='tc dib br3 ma1 bw2 shadow-5'>
          //   <img src={e.img} width='39.6px' height='70.8px' alt='card' className='br3 cards'/> 
          //   {/* 33:59 */}
          // </div>
          )}
        )}
      </div>
      우라도라
      {UradoraImg(uradora)}
      <hr />
      <div>
        {yakuNameArr.map(yakuName => {
          return (<h4>{yakuName}</h4>)
        })}
      <hr />
      {
        yakuman >= 1
        ? <h1>{yakumanText[yakuman]}{' '} {32000*yakuman}점</h1>
        : <h3>{pan}판 {point}점</h3>
      }
        
      </div>
      {
        win
        ? <h4>{myScore - point}{' '}→{' '}{myScore}점 </h4>
        : <h4>{myScore + point}{' '}→{' '}{myScore}점 </h4>
      }
      <span style={{color:'red'}}>창 바깥 눌러 닫기</span>

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