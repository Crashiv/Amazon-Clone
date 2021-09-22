// eslint-disable-next-line
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
          <Header/>
          <Checkout/>
          </Route>

          <Route path="/login">
            <h1>Login</h1>
          </Route>

          {/* Default path */}
          <Route path="/">
          <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
{/* we need React router */ }
{/* {localhost.com} */ }
{/* localhost.com/checkout */ }
{/* localhost.com/login */ }
export default App;
