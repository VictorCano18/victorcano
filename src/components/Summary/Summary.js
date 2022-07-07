import React, { Component } from "react";
import "./Summary.css";
import cubes from "../../assets/img/rubik.png";
import { UserContext } from "../../context/UserContext";


export default class Summary extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      cubeClass: ""
    };
  }


  componentDidMount(){
    const { cube } = this.context;
    this.setState({cubeClass: cube});
  }

  render() {
    return (
      <div className="container" id="summary">
        <div className="row flex-column align-items-center justify-content-center vh-100 overflow-hidden">
          <div>
            <div className="d-flex align-items-center justify-content-center col-12 mt-5">
              <img
                src={cubes}
                alt="rubiks"
                className="img-fluid cubeFilter controller"
              />
            </div>
            <div className="col-6 justify-content-center text-center summaryTextBox pt-5 pb-5">
              <div className="filter">
                <div id="sTextBox" className="summaryText">
                  <h3 className="pt-2">
                    Hi! I'm Victor, a new Software Engineer {this.state.cubeClass}
                    <span role="img" aria-label="emoji">
                      👾
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
