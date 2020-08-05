import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./components/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import { About } from "./components/About";
import Track from "./components/Track";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
import { NoMatch } from "./components/NoMatch";
import { Navigation } from "./components/Navigation";

class App extends Component {

  render() {
    return (
      <div>
        <React.Fragment>

          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Mens" component={Mens} />
              <Route path="/Womens" component={Womens} />
              <Route path="/track" component={Track} />
              <Route path="/about" component={About} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Confirmation/:id" component={Confirmation} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}
export default App;