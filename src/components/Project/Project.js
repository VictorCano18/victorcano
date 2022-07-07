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
import "./Project.css";

export default class Project extends Component {
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
      <div className="container flex-column">
        <div
          className={
            window.screen.width >= 768
              ? "d-flex align-items-center justify-content-center text-center mt-5"
              : "row d-flex align-items-center justify-content-center text-center mt-5"
          }
        >
          <div className="col-12 col-sm-4">
            <div className="mb-3">
              <button
                className="hoverBlur mb-3"
                onMouseDown={this.clickImageSmart}
              >
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="SmartProject"
                  src={SmartSeguros}
                />
              </button>
              <h2 className="text-white mt-sm-0 mt-4">Smart Seguros</h2>
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h4 className="" id="imageInfotext">
                I developed the Front End of Smart Seguros.
                <br />
                (Click the icon to see more info)
              </h4>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center d-none"
            id="smartInformation1"
          >
            <div className="row col-sm-6 col-12 d-none" id="smartInformation2">
              <div
                className="container2"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                <img
                  src={SmartMedico}
                  className="img-fluid medicoImage"
                  alt="Smart Medico"
                  id="medicImage"
                />
                {this.state.isMouseInside ? (
                  <button
                    className="btn btn-sm btn-primary"
                    id="smartButton"
                    onClick={this.goToSmart}
                  >
                    View demo
                  </button>
                ) : null}
              </div>
              <div className="mt-3">
                <h3 className="text-secondary text-center">
                  I designed the entire experience on the platform to ensure
                  that website visitors can easily interact with the page.
                </h3>
              </div>
            </div>
            <div className="row col-sm-6 col-12 d-none" id="smartInformation3">
              <div>
                <h3 className="text-secondary">
                  The project last about 1(one) year, so I could improve all my
                  skills in:
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
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            window.screen.width >= 768
              ? "d-flex align-items-center justify-content-center text-center mt-5"
              : "row d-flex align-items-center justify-content-center text-center mt-5"
          }
        >
          <div
            className="col-12 col-sm-4 order-2"
            onMouseDown={this.clickImageAmazobbies}
          >
            <div className="mb-3">
              <button className="hoverBlur mb-3">
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="Amazobbies"
                  src={Amazobbies}
                />
              </button>
              <h2 className="text-white mt-sm-0 mt-4">Amazon Hobbies</h2>
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h4 className="" id="imageInfotext2">
                I developed the BackEnd and FrontEnd sections of the web app.
                <br />
                (Click the icon to see more info)
              </h4>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center d-none"
            id="amazobbiesInformation1"
          >
            <div
              className="row col-sm-6 col-12 d-none"
              id="amazobbiesInformation2"
            >
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
            <div
              className="row col-sm-6 col-12 d-none"
              id="amazobbiesInformation3"
            >
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
