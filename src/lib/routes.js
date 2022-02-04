import Home from "../pages/Home";
import Projects from "../pages/Projects";

let routes = [
  { path: "/victorcano/", exact: true, name: "home", component: Home },
  { path: "/victorcano/Projects", exact: true, name: "prohects", component: Projects }
]

export default routes;
