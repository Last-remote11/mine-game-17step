import './App.css';
import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet';
import HowToPlay from '../components/HowToPlay'
import StartButton from '../components/StartButton';
import DecideButton from '../components/DecideButton';

import Darkmode from '../components/Darkmode'
import CardList from './CardList'
import MyHand from './MyHand'
import DecidedHand from './DecidedHand'
import DecidedField from './DecidedField'
import Discarded from './Discarded'


const App = () => {

  const background = useSelector(state => state.enableDarkMode.background)
  const route = useSelector(state => state.changeRoute.route)
  // const cards = useSelector(state => state.switchHand.cards)
  // const dispatch = useDispatch()


  const renderSwitch = (route) => {
    switch (route) {
      case 'home':
        return (
          <div>
            <StartButton />
            <div className='routeTest'>홈화면</div>
          </div>
        )
      case 'phase1':
        return (
          <div className='routeTest'><div>패를만드세요</div>
            <DecideButton />
            <CardList />
            <MyHand />
          </div>
        )
      case 'phase2':
        return (
          <div className='routeTest'>2페이즈!
            <Discarded />
            <DecidedField />
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
        <style>{background}</style>
      </Helmet>
      <h1 className='title'>지뢰 게임 17보</h1>
      
      <HowToPlay />
      <Darkmode />
      {renderSwitch(route)
        // route === 'home'
        // ? <div className='routeTest'>홈화면</div>
        // : 
        // <div className='routeTest'>게임중

        //    <CardList />
        //    <MyHand />

        // </div>
      }

    </div>
  );
}

export default App;


// 1. 게임을 시작하면 34장씩 배패 (백엔드?)
// 2. 1페이즈, CardList에 있는 패를 클릭하면 MyHand 섹션으로 옮겨짐. 시간제한 3분, 최대 13장
// 3. 원래 만든 손패는 만관 이상 텐파이여야 하지만 이걸 구현할 수 있을지는 미지수 
// 3-1. 그냥 점수계산 알고리즘만 만들어 화료 후 조건 만족이 안되면 지는걸로..?
// (만관 텐파이 조건 확인은 유저에게 떠넘기기)
// 4. 2페이즈, 안 사용한 패들을 번갈아가며 하나씩 버림
// 5. 상대의 버림패를 보고 론, 패스 둘 중에 하나를 고름(골라야 턴이 넘어감)
// 6. 론 선언하면 론한사람 손패에 버림패를 포함하여 점수계산.
// 7. 론한사람이 점수뺏음 3-1 에서 화료 조건을 만족하지 않으면 촌보(벌금냄)
// 8. 서로 17개를 버릴때까지 론이 안 나오면 유국