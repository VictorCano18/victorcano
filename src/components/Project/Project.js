import React, { Component } from "react";
import SmartSeguros from "../../assets/img/smartLogIn.jpg";
import "./Project.css";

export default class Summary extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-sm-center justify-content-sm-center vh-100 overflow-hidden">
          <div className="mt-sm-0 mt-5 col-12 col-md-6">
            <h2 className="text-white centerTextProject">Smart Seguros</h2>
            <div className="hoverBlur">
              <img
                id="smartImageProject"
                className="img-fluid"
                alt="SmartProject"
                src={SmartSeguros}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-center text-muted font-weight-light">
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
