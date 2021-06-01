import React, { createContext } from 'react';
import Game from './Game'
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const isMobile = window.innerWidth < 800 ? true : false
  const mobileContext = createContext(false)

  return (
    <Router>
      <Switch>
        <Route path='/mine-game-17step'>
          <Game/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;