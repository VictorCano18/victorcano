import React, { Component } from "react";
import { Link } from "react-router-dom";
// import VicLogo from "../../assets/img/axe.png";
import "./Navbar.css";

export default class Navbar extends Component {
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
            <div
              className="collapse navbar-collapse justify-content-sm-center"
              id="navbarMenu"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li id="nav-l" className="nav-item">
                  <Link to="/" className="nav-link" onClick={this.topFunction}>
                    <h4>Home</h4>
                  </Link>
                </li>
                <li id="nav-l" className="nav-item">
                  <Link
                    to="/Projects"
                    className="nav-link"
                    onClick={this.topFunction}
                  >
                    <h4>Projects</h4>
                  </Link>
                </li>
                <li id="nav-l" className="nav-item">
                  <Link
                    to="/Projects"
                    className="nav-link"
                    onClick={this.topFunction}
                  >
                    <h4>About Me</h4>
                  </Link>
                </li>
                <li id="nav-l" className="nav-item">
                  <Link
                    to="/Projects"
                    className="nav-link"
                    onClick={this.topFunction}
                  >
                    <h4>CV</h4>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

