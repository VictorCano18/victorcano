import React, { Component } from "react";
import SmartSeguros from "../../assets/img/smart.png";
import SmartMedico from "../../assets/img/smartMedico.jpg";
import ReactIcon from "../../assets/img/atom.png";
import Javascript from "../../assets/img/js.png";
import Bootstrap from "../../assets/img/bootstrap.png";
import Css from "../../assets/img/css.png";
import Html from "../../assets/img/html.png";
import Node from "../../assets/img/node.png";
import Amazobbies from "../../assets/img/amazobbies.jpg";
import AmazobbiesHome from "../../assets/img/amazobbieshome.jpg";
import Angular from "../../assets/img/angular.png";
import Aws from "../../assets/img/aws.png";
import "./Projects.css";

export default class Projects2 extends Component {
  constructor() {
    super();
    this.state = {
      clickedImage: false,
      clickedImage2: false,
      isMouseInside: false,
    };
    this.clickImageSmart = this.clickImageSmart.bind(this);
    this.clickImageAmazobbies = this.clickImageAmazobbies.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  clickImageSmart() {
    if (!this.state.clickedImage) {
      this.setState({ clickedImage: true }, () => {
        document.getElementById("smartInformation1").className =
          "row justify-content-center align-items-center text-light";
        document.getElementById("smartInformation2").className =
          "row d-flex justify-content-center align-items-center col-sm-6 col-12";
        document.getElementById("smartInformation3").className =
          "row col-sm-6 col-12";
        document.getElementById("imageInfotext").className = "d-none";
      });
    } else {
      this.setState({ clickedImage: false }, () => {
        document.getElementById("smartInformation1").className = "d-none";
        document.getElementById("smartInformation2").className = "d-none";
        document.getElementById("smartInformation3").className = "d-none";
        document.getElementById("imageInfotext").className = "";
      });
    }
  }

  clickImageAmazobbies() {
    if (!this.state.clickedImage2) {
      this.setState({ clickedImage2: true }, () => {
        document.getElementById("amazobbiesInformation1").className =
          "row justify-content-center align-items-center text-light order-1";
        document.getElementById("amazobbiesInformation2").className =
          "row d-flex justify-content-center align-items-center col-sm-6 col-12 order-2";
        document.getElementById("amazobbiesInformation3").className =
          "row col-sm-6 col-12";
        document.getElementById("imageInfotext2").className = "d-none";
      });
    } else {
      this.setState({ clickedImage2: false }, () => {
        document.getElementById("amazobbiesInformation1").className = "d-none";
        document.getElementById("amazobbiesInformation2").className = "d-none";
        document.getElementById("amazobbiesInformation3").className = "d-none";
        document.getElementById("imageInfotext2").className = "";
      });
    }
  }

  goToSmart() {
    window.open("http://smartseguros.mx");
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    return (
      <div className="container flex-column pt-0" id="projects">
        <div className="d-flex justify-content-end">
          <div className="card card-smart col-sm-6 col-12">
            <div className="col-12 align-items-center justify-content-center text-center m-3">
              <div className="col-8 d-flex align-items-center justify-content-start text-left">
                <div className="mb-3">
                  <img
                    id="smartImageProject"
                    className="img-fluid"
                    alt="SmartProject"
                    src={SmartSeguros}
                  />
                </div>
                <div
                  id="textOf"
                  className="col-12 text-center text-muted font-weight-light"
                >
                  <h2 className="text-white mt-sm-0 mt-4">Smart Seguros</h2>
                </div>
              </div>
            </div>
            <div>
              <div
                className="d-flex justify-content-center align-items-center"
                id="smartInformation1"
              >
                <div className="row col-7" id="smartInformation2">
                  <div className="">
                    <h3 className="text-secondary text-left">
                      I designed the entire experience on the platform to ensure
                      that website visitors can easily interact with the page.
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-secondary">
                      The project last about 1 (one) year, so I could improve
                      all my skills in{" "}
                      <span role="img" aria-label="emoji">
                        👉
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="row col-4" id="smartInformation3">
                  <div>
                    <div className="row d-flex align-items-center justify-content-center mt-sm-3 mt-5">
                      <div className="col-6 text-center text-sm-end">
                        <div>
                          <img
                            src={ReactIcon}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                        <div>
                          <img
                            src={Node}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                        <div>
                          <img
                            src={Javascript}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                      </div>

                      <div className="col-6 text-center text-sm-start">
                        <div>
                          <img
                            src={Html}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                        <div>
                          <img
                            src={Css}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                        <div>
                          <img
                            src={Bootstrap}
                            className="img-fluid iconSkills"
                            alt="Node"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex col-12 justify-content-center mb-3">
              <div
                className="container2"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                <img
                  src={SmartMedico}
                  className="img-fluid medicoImage p-2"
                  alt="Smart Medico"
                  id="medicImage"
                />
                {this.state.isMouseInside ? (
                  <button
                    className="btn btn-sm btn-primary"
                    id="smartButton"
                    onClick={this.goToSmart}
                  >
                    View
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            window.screen.width >= 768
              ? "col-sm-6 col-12 d-flex align-items-center justify-content-center text-center mt-5 card card-amazon"
              : "col-sm-6 col-12 d-flex align-items-center justify-content-center text-center mt-5 card card-amazon"
          }
        >
          <div className="col-12 col-sm-12">
            <div className="d-flex flex-column mb-3 mt-3 p-sm-0 p-2">
              <img
                id="smartImageProject"
                className="img-fluid p-sm-3 p-0"
                alt="Amazobbies"
                src={Amazobbies}
              />
              <h2 className="text-white mt-sm-2 mt-4">Amazon Hobbies</h2>
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h3 className="text-secondary" id="">
                I developed the BackEnd and FrontEnd sections of the web app.
              </h3>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            id="amazobbiesInformation1"
          >
            <div className="row col-sm-6 col-12" id="amazobbiesInformation2">
              <div
                className="container2"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                <img
                  src={AmazobbiesHome}
                  className="img-fluid medicoImage"
                  alt="Smart Medico"
                  id="medicImage"
                />
                {/* {this.state.isMouseInside ? (
                  <button
                    className="btn btn-sm btn-primary"
                    id="smartButton"
                    onClick={this.goToSmart}
                  >
                    View demo
                  </button>
                ) : null} */}
              </div>
              <div className="mt-3">
                <h3 className="text-secondary text-center">
                  Besides, I worked in the mail part, I designed the template
                  for the email when an user create his account or forget his
                  pass. Also if his comment had bad words or scam.
                </h3>
              </div>
            </div>
            <div className="row col-sm-6 col-12" id="amazobbiesInformation3">
              <div>
                <h3 className="text-secondary">
                  The project last about 1(one) semester, so I could improve all
                  my skills in:
                  <div className="row d-flex align-items-center justify-content-center mt-sm-3 mt-5">
                    <div>
                      <img
                        src={Aws}
                        className="img-fluid iconSkills2"
                        alt="AWS"
                      />
                    </div>
                    <div>
                      <img
                        src={Angular}
                        className="img-fluid iconSkills2"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  I was i charge in the ethical part where the bad words must be
                  censured.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
