import './Game.css';
import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";

import HowToPlay from '../components/Buttons/HowToPlay'
import StartButton from '../components/Buttons/StartButton';
import DecideButton from '../components/Buttons/DecideButton';
import Darkmode from '../components/Buttons/Darkmode'
import CardList from './CardList'
import Dora from './Dora'
import MyHand from './MyHand'
import DecidedHand from './DecidedHand'
import DecidedField from './DecidedField'
import MyDiscard from './MyDiscard'
import OpponentDiscard from './OpponentDiscard'
import WebSocket from '../components/WebSocket'
import ScoreBoard from '../components/ScoreBoard'
import Lobby from '../components/Lobby'
import WhoseTurn from '../components/WhoseTurn'
import Ron from '../components/Buttons/Ron'
import Result from './Result'
import WaitBackdrop from '../components/WaitBackdrop'
import Footer from '../components/Footer'
import SnackBarGroup from '../components/SnackBarGroup'
import Hint from '../components/Hint'
import Circular from '../components/Circular'
import LogoutButton from '../components/Buttons/Logout-button'

import { userLogin, gameStateMyName } from '../reducer'

const Game = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const { background } = useSelector(state => state.enableDarkMode)
  const { phase, time, roomID, serverConnected } = useSelector(state => state.gameState)
  const { login } = useSelector(state => state.auth)
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // const API_URL = 'http://localhost:3000'
  const API_URL = "https://intense-brushlands-31556.herokuapp.com"


  useEffect(() => forceUpdate(), [time])
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      history.push('/login')
    } else {
      async function authToken() {
        try {
          let res = await fetch(API_URL + '/authByToken', {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            }
          })
          res = await res.json()
          if (res.name) {
            console.log('토큰으로받은 닉네임', res.name)
            dispatch(userLogin(res.name))
            dispatch(gameStateMyName(res.name))
            
          } else {
            history.push('/login')
            alert('세션이 만료되었습니다. 다시 로그인해주세요')
          }
        } catch(e) {
          alert(e)
          history.push('/login')
        }
      }
      authToken()
    }
  }
  , [])


  const renderSwitch = (phase) => {
    switch (phase) {

      case 0: // 로그인, 연결 전
        return (
          <div>
            <div className='routeTest'></div>
            {serverConnected 
            ? <h4 style={{color:'blue'}}>연결되었습니다.</h4> 
            : <h4 style={{color:'red'}}><Circular />서버에 접속중..</h4>}
            <Lobby />
            <StartButton />
          </div>
        )
      case 1: // 로그인, 접속, 배패 완료, 조패단계
        return (
          <div className='routeTest'><h4 className='blue'>패를 만든 후 완료를 누르세요</h4>
            <DecideButton />
            <ScoreBoard />
            <div className='field-dora'>
              <CardList />
              <Dora />
            </div>
            <Hint />
            <MyHand />
          </div>
        )
      case 2: // 서로 조패 완료 후, 하나씩 버리는 단계
        return (
          <div className='routeTest'>
            <ScoreBoard />
            <WhoseTurn /> 
            <div className='Discard-container2'>
              <MyDiscard />
              <OpponentDiscard />
            </div>
            <div className='field-dora'>
              <DecidedField />
              <Dora />
            </div>
              <Hint />
              <Ron />
              <DecidedHand />
          </div>
        )
      default:
        return (
          <div>error</div>
        )
    }
  }


  return (
    <div className="tc">
      <Helmet>
        <meta charSet='utf-8'/>
        <style>{background}</style>
      </Helmet>
      {
        login
        ?
        <div>
          <div className='navbar'>
            <div className = 'tl light-silver'>방 ID : {' '}{roomID}</div>
            <Darkmode />
            <HowToPlay />
            <LogoutButton />
          </div>
          <h1 className='title'>지뢰 게임 17보</h1>
          <WaitBackdrop />
          <SnackBarGroup />
          <Result />
          <WebSocket />
          {renderSwitch(phase)}
          <Footer />
        </div>
        : <h1>로그인 정보를 확인하는중...</h1>
      }
      {/* <div className = 'tl light-silver'>방 ID : {' '}{roomID}</div>
      <h1 className='title'>지뢰 게임 17보</h1>
      <WaitBackdrop />
      <SnackBarGroup />
      <Result />
      <WebSocket />
      <HowToPlay />
      <Darkmode />
      {renderSwitch(phase)}
      <Footer /> */}
    </div>
  );
}

export default Game;


// 1. 게임을 시작하면 34장씩 배패 (백엔드?)
// 2. 1페이즈, CardList에 있는 패를 클릭하면 MyHand 섹션으로 옮겨짐. 시간제한 3분, 13장
// 3. 원래 만든 손패는 만관 이상 텐파이여야 하지만 이걸 구현할 수 있을지는 미지수 
// 3-1. 그냥 점수계산 알고리즘만 만들어 화료 후 조건 만족이 안되면 지는걸로..?
// (만관 텐파이 조건 확인은 유저에게 떠넘기기)
// 4. 2페이즈, 안 사용한 패들을 번갈아가며 하나씩 버림
// 5. 상대의 버림패를 보고 론, 패스 둘 중에 하나를 고름(골라야 턴이 넘어감)
// 6. 론 선언하면 론한사람 손패에 버림패를 포함하여 점수계산.
// 7. 론한사람이 점수뺏음 3-1 에서 화료 조건을 만족하지 않으면 촌보(벌금냄)
// 8. 서로 17개를 버릴때까지 론이 안 나오면 유국


// A의 myTurn: true -> A: 버림 -> A의 myTurn: false -> 서버로 전송
// 서버: A의 요청 받으면 웹소켓으로 B에게 버림패 정보 전송 Ron: false -> 
// 서로의 discard field에 반영 -> B: myturn: true
// 론아니면 B: 버림 -> B의 myturn: false -> 서버가 정보 받고 다시 A로 전송 반복
// 론이면 B: 론 요청 보냄 -> 서버는 받고 웹소켓으로 score, Ron: true 를 A에게 전송

// 점수교환, 만관이상 여부 확인 후 점수교환, 새 게임 시작?

// 론누르면 :
// (opponentDiscard 배열의 마지막 카드 + myHand가 true인 카드)의 순서(혹은 이름)의 배열을
// 서버에 전달.
// 서버는 만관여부 후리텐 여부 등을 확인해 점수통보