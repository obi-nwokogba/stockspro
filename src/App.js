import './App.css';
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import About from "./pages/About";
import Main from "./pages/Main";
import Company from "./pages/Company";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


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
          render={(routerProps)=> <Company {...routerProps} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
