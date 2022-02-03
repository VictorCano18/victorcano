import React from "react";
import "./App.css";
import routes from "./lib/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";


export default function App() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #212529" }} />
      <BrowserRouter>
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
