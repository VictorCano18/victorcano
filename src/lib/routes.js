import Home from "../pages/Home";
import Projects from "../pages/Projects";

let routes = [
  { path: "/", exact: true, name: "home", component: Home },
  { path: "/Projects", exact: true, name: "prohects", component: Projects }
]

export default routes;
