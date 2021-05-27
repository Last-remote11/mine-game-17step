import React from 'react';
import Game from './Game'
import Login from './Login';
import Signup from './Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path='/mine-game-17step'>
          <Game/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;