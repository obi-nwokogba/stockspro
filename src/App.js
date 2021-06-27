
import './App.css';
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import About from "./pages/About";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
        <Stocks />
        </Route>
        <Route path="/companies">
        <Main />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route 
          path="/stocks/:symbol"
          render={(routerProps)=> <Price {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
