import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound';


export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState([])

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
   </UserContext.Provider>
  );
}

export default App;
