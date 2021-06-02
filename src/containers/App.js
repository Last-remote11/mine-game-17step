import React, { createContext } from 'react';
import Game from './Game'
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const mobileContext = createContext(false)

const App = () => {
  const isMobile = window.innerWidth < 900 ? true : false
  

  return (
    <Router>
      <Switch>
        <Route path='/mine-game-17step'>
          <mobileContext.Provider value={isMobile}>
            <Game/>
          </mobileContext.Provider>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;