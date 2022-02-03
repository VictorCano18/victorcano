import React, { Component } from "react";
import "./Summary.css";

export default class Summary extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100 overflow-hidden">
          <div className="col-6 justify-content-center text-center summaryTextBox pt-5 pb-5">
            <div className="filter">
              <div className="summaryText">
                <h3 className="pt-2">
                  Hi! I'm Victor, a new Software Engineer{" "}
                  <span role="img" aria-label="emoji">
                    👾
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
