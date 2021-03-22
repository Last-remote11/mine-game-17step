import './App.css';
import React from 'react';
import HowToPlay from '../components/HowToPlay'
import StartButton from '../components/StartButton';
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet';

import Darkmode from '../components/Darkmode'
import CardList from '../containers/CardList'
import Sidebar from '../components/Sidebar';

const App = () => {

  const background = useSelector(state => state.enableDarkMode.background)
  const route = useSelector(state => state.changeRoute.route)
  // const dispatch = useDispatch()


  return (
    <div className="tc">
      <Helmet>
        <style>{background}</style>
      </Helmet>
      <h1 className='title'>지뢰 게임 17보</h1>
      <StartButton />
      <HowToPlay />
      <Darkmode />
      {
        route === 'home'
        ? <div className='routeTest'>홈화면</div>
        : 
        <div className='routeTest'>게임중

           {/* <Sidebar /> */}
           <CardList />

        </div>
      }

    </div>
  );
}

export default App;
