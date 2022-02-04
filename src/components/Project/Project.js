import React, { Component } from "react";
import SmartSeguros from "../../assets/img/smartLogIn.jpg";
import "./Project.css";

export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      clickedImage: false,
    };
    this.clickImage = this.clickImage.bind(this);
  }

  clickImage() {
    if (this.state.clickedImage === false) {
      document.getElementById("textOf").className =
        "text-center text-muted font-weight-light";
      this.setState({ clickedImage: true });
    } else {
      document.getElementById("textOf").className = "d-none";
      this.setState({ clickedImage: false });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row flex-column align-items-center justify-content-center text-center vh-100 overflow-hidden">
          <div className="mt-sm-0 mt-5 mb-5">
            <figure className="position-relative">
              <button className="hoverBlur" onClick={this.clickImage}>
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="SmartProject"
                  src={SmartSeguros}
                />
              </button>
              <figcaption>
                <h2 className="text-muted">Smart Seguros</h2>
              </figcaption>
            </figure>
          </div>
          <div
            id="textOf"
            className="text-center text-muted font-weight-light d-none"
          >
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
