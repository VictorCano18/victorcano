import React, { Component } from "react";
import "./App.css";
import Helmet from "react-helmet";
import routes from "./lib/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div id="fonts">
        <Helmet bodyAttributes={{ style: "background-color : #212529" }} />
        <BrowserRouter>
          <Navbar />
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
