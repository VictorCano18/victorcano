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
import Node from "../../assets/img/node.png";
import Me from "../../assets/img/me.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container marginAboutMe scrollControl card card-about" id="aboutMe">
      <div className="mb-5">
        <div className="row">
          <div className="col-sm-4 col-12">
            <div className="image-me">
              <img src={Me} className="img-fluid mb-4" alt="me"/>
            </div>
          </div>
          <div className="col-sm-8 col-12">
            <h2 className="justify-text">
              I am a{" "}
              <span className="text-uppercase text-light">passionate</span>{" "}
              person. I see problems as a possibility to improve ourselves or as
              an opportunity to{" "}
              <span className="text-uppercase text-light">
                create something better.
              </span>{" "}
              I love teamwork because you can always go the extra mile in any
              aspect. I am a{" "}
              <span className="text-uppercase text-light">perservering</span>{" "}
              and <span className="text-uppercase text-light">focused</span>{" "}
              person and I am aware that not all things are going to be fine and
              that 90% of the things that happen to us we do not control,
              however, our{" "}
              <span className="text-uppercase text-light">attitude</span> does,
              and it will depend on whether the things we do are perfect.
            </h2>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-center text-secondary text-center mb-5">
        <div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
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
            <div className="col-12 col-sm-4 circleIcon">
              <img
                src={Node}
                alt="axe"
                id="imageAboutMe2"
                className="img-fluid mt-sm-4 mt-3 mb-2"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
