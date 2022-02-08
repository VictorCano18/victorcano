import React from "react";
import "./AboutMe.css";
import ReactIcon from "../../assets/img/atom.png";
import Java from "../../assets/img/java.png";
import Javascript from "../../assets/img/js.png";
import C from "../../assets/img/c.png";
import Html from "../../assets/img/html.png";
import Python from "../../assets/img/python.png";
import Sql from "../../assets/img/sql.png";
import Bootstrap from "../../assets/img/bootstrap.png";
import Cplus from "../../assets/img/c-.png";
import Css from "../../assets/img/css.png";
import Csharp from "../../assets/img/c-sharp.png";

const AboutMe = () => {
  return (
    <div className="container marginAboutMe">
      <div className="row d-flex justify-content-center text-secondary text-center">
        <div className="col-12">
          <h1 className="text-start mr-2">Skills</h1>
          <hr color="blue" size="9" width="100" className="mb-5" />
          <div className="row justify-content-center">
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Java}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Python}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={C}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Cplus}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={ReactIcon}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Javascript}
                alt="axe"
                id="imageAboutMe2"
                className="img-fluid mt-sm-4 mt-3 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Css}
                alt="axe"
                id="imageAboutMe2"
                className="img-fluid mt-sm-4 mt-3 mb-2"
              />
            </div>
            <div className="col-12 col-sm-3 circleIcon">
              <img
                src={Html}
                alt="axe"
                id="imageAboutMe2"
                className="img-fluid mt-sm-4 mt-3 mb-2"
              />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-4 circleIcon">
              <img
                src={Csharp}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-4 circleIcon">
              <img
                src={Sql}
                alt="axe"
                id="imageAboutMe"
                className="img-fluid mt-2 mb-2"
              />
            </div>
            <div className="col-12 col-sm-4 circleIcon">
              <img
                src={Bootstrap}
                alt="axe"
                id="imageAboutMe2"
                className="img-fluid mt-sm-4 mt-3 mb-2"
              />
            </div>
          </div>
        </div>
        <div className="col-12 d-none">
          <h1 className="text-start mr-2">Me</h1>
          <hr color="blue" size="9" width="100" />
          <h2>
            I am a <span className="text-uppercase">passionate</span> person. I
            see problems as a possibility to improve ourselves or as an
            opportunity to{" "}
            <span className="text-uppercase">create something better.</span> I
            love teamwork because you can always go the extra mile in any
            aspect. I am a <span className="text-uppercase">perservering</span>{" "}
            and <span className="text-uppercase">focused</span> person and I am
            aware that not all things are going to be fine and that 90% of the
            things that happen to us we do not control, however, our{" "}
            <span className="text-uppercase">attitude</span> does, and it will
            depend on whether the things we do are perfect.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
