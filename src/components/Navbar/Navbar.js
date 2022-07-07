import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import Helmet from "react-helmet";
import { UserContext } from "../../context/UserContext";

export default class Navbar extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      number: "212529",
      flag: false,
    };

    this.turnOffOn = this.turnOffOn.bind(this);
  }

  topFunction(name) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    document.getElementById("nav-summary").className = "nav-item";
    document.getElementById("nav-aboutme").className = "nav-item";
    document.getElementById("nav-contact").className = "nav-item";
    document.getElementById("nav-summary").className = "nav-item";
    // document.getElementById(name).className = "nav-item active";
  }

  turnOffOn() {
    const { cube, setCube } = this.context;
    if (!this.state.flag) {
      setCube("summaryText");
      console.log(cube);
      this.setState({ number: "7c8690", flag: true });
      document.getElementById("myNavbar").className =
        "navbar navbar-expand-sm fixed-top pr-4";
      // document.getElementById("myNavbar").style.color
      document.getElementById("myNavbar").style.backgroundColor = "#7c8690";
    } else {
      setCube("summaryText2");
      this.setState({ number: "212529", flag: false });
      document.getElementById("myNavbar").className =
        "navbar navbar-expand-sm navbar-dark bg-dark fixed-top pr-4";

      // document.getElementById("myNavbar").style.color = "#7c8690";
      // document.getElementById("myNavbar").style.backgroundColor = "#212529";
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Helmet
          bodyAttributes={{ style: `background-color : #${this.state.number}` }}
        />
        <div className="container">
          <nav id="myNavbar" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top pr-4">
            <button
              id="navbarButton"
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
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-light topnav">
                <li id="nav-summary" className="nav-item">
                  <Link
                    to="#summary"
                    smooth
                    className="nav-link"
                    onClick={() => this.topFunction("nav-summary")}
                  >
                    <h4>Home</h4>
                  </Link>
                </li>
                <li id="nav-aboutme" className="nav-item">
                  <Link
                    smooth
                    to="#aboutMe"
                    className="nav-link"
                    onClick={() => this.topFunction("nav-aboutme")}
                  >
                    <h4>Me</h4>
                  </Link>
                </li>
                <li id="nav-projects" className="nav-item">
                  <Link
                    smooth
                    to="#projects"
                    className="nav-link"
                    onClick={() => this.topFunction("nav-projects")}
                  >
                    <h4>Projects</h4>
                  </Link>
                </li>
                <li id="nav-contact" className="nav-item">
                  <Link
                    smooth
                    to="#contact"
                    className="nav-link"
                    onClick={() => this.topFunction("nav-contact")}
                  >
                    <h4>Contact</h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-1 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked
                id="flexSwitchCheckDefault"
                onChange={() => this.turnOffOn()}
              />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
