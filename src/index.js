import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import history from "../src/lib/history";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <Router history={history}>
    <Suspense fallback={null}>
      <UserProvider>
        <App />
      </UserProvider>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
