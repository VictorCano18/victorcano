import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

let routes = [
  { path: "/", exact: true, name: "home", component: Home },
  { path: "/Projects", exact: true, name: "projects", component: Projects },
  { path: "/Contact", exact: true, name: "contact", component: Contact }
]

export default routes;
