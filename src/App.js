import React from "react";
import "./App.css";
import routes from "./lib/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import NavBar from "./components/Navbar/Navbar";


export default function App() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #212529" }} />
      <NavBar className="row d-flex align-items-center justify-content-center" />
      <Router basename={process.env.PUBLIC_URL}>
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
      </Router>
    </div>
  );
}
