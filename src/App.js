// eslint-disable-next-line
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import React, { useEffect } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {const unsubscribe = 
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //loggegIn
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //loggegOut
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* Default path */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
export default App;
