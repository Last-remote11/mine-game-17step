import React from 'react';
import Game from './Game'
import Login from './Login';
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
        <Route path='/game'>
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