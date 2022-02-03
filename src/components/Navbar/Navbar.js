import React, { Component } from "react";
// import VicLogo from "../../assets/img/axe.png";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top pr-4">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMenu"
              aria-controls="navbarSupportNavbaredContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <a className="navbar-brand pl-4" href="/">
              <img
                src={VicLogo}
                id="navbarLogo"
                className="img-fluid pl-4"
                alt="SmartSegurosLogo"
              />
            </a> */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
              <a className="navbar-brand" href="">
                <h4>Home</h4>
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="">
                    <h4>About Me</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <h4>Projects</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <h4>CV</h4>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
