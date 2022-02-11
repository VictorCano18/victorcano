import React, { Component } from "react";
import SmartSeguros from "../../assets/img/rocket.png";
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
    window.alert("The page is not ready :c");
  }

  render() {
    return (
      <div className="">
        <div className="row d-flex align-items-center justify-content-center text-center vh-100 scrollControl mt-5 mt-sm-0">
        <div className="col-sm-3 col-12">
            <div className="mt-sm-0 mt-5 mb-3">
              {/* <figure className="position-relative"> */}
              <button className="hoverBlur mb-3" onMouseDown={this.clickImage}>
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="SmartProject"
                  src={SmartSeguros}
                />
              </button>
              {/* <figcaption> */}
              <h2 className="text-white mt-sm-0 mt-4">Smart Seguros</h2>
              {/* </figcaption> */}
              {/* </figure> */}
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h4>I develop the Front End of Smart Seguros. It took 1 year.</h4>
            </div>
          </div>

          <div className="col-sm-3 col-12">
            <div className="mt-sm-0 mt-5 mb-3">
              {/* <figure className="position-relative"> */}
              <button className="hoverBlur mb-3" onMouseDown={this.clickImage}>
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="SmartProject"
                  src={SmartSeguros}
                />
              </button>
              {/* <figcaption> */}
              <h2 className="text-white mt-sm-0 mt-4">Smart Seguros</h2>
              {/* </figcaption> */}
              {/* </figure> */}
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h4>I develop the Front End of Smart Seguros. It took 1 year.</h4>
            </div>
          </div>

          <div className="col-sm-3 col-12 mb-sm-0 mb-5">
            <div className="mt-sm-0 mt-5 mb-3">
              {/* <figure className="position-relative"> */}
              <button className="hoverBlur mb-3" onMouseDown={this.clickImage}>
                <img
                  id="smartImageProject"
                  className="img-fluid"
                  alt="SmartProject"
                  src={SmartSeguros}
                />
              </button>
              {/* <figcaption> */}
              <h2 className="text-white mt-sm-0 mt-4">Smart Seguros</h2>
              {/* </figcaption> */}
              {/* </figure> */}
            </div>
            <div
              id="textOf"
              className="text-center text-muted font-weight-light"
            >
              <h4>I develop the Front End of Smart Seguros. It took 1 year.</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
