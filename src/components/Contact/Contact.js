import React, { useState } from "react";
import CV from "../../assets/files/CV_VictorCano.pdf";
import "./Contact.css";
import { send } from "emailjs-com";
import swal from "sweetalert";
import LinkedIn from "../../assets/img/linkedin.png";
import GitHub from "../../assets/img/github.png";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Victor Cano",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      toSend.message !== "" &&
      toSend.from_name !== "" &&
      toSend.reply_to !== ""
    ) {
      send(
        "service_w1qnbfa",
        "template_xvyk7qc",
        toSend,
        "user_kfH03hiOSfxxjmFkEFNW1"
      )
        .then(() => {
          swal("Mail sent successfully", "", "success");
        })
        .catch(() => {
          swal("Something went wrong", "try again later", "warning");
        });
    } else {
      swal("You must fill all the fields", "", "warning");
    }
  };

  return (
    <div className="container-bg" id="contact">
      <div className="container mt-5">
        <div className="text-secondary">
          <div className="row d-flex flex-column justify-content-center align-items-center text-center scrollControl">
            <div className="col-sm-10 col-12 mb-3">
              <div className="row">
                <div className="col-sm-6 col-12 mt-5 text-light mb-sm-5 mb-1 ttp">
                  <div className="col-12 mb-5 mb-sm-0 mt-5">
                    <div>
                      <h2>If you want to know more about me:</h2>
                    </div>
                    <div className="row mt-3 ml-2 mb-5 mb-sm-0">
                      <div className="col-6">
                        <a
                          id="downloadButton"
                          className="btn btn-secondary btn-lg btn-block contact-image"
                          download
                          href={CV}
                        >
                          Download CV
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://github.com/VictorCano18"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={GitHub}
                            alt="Git"
                            id="imageContact"
                            className="img-fluid contact-image"
                          />
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://www.linkedin.com/in/vics1806/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={LinkedIn}
                            alt="Git"
                            id="imageContact"
                            className="img-fluid contact-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  // className={
                  //   (width < 576 || width >= 1000)
                  //     ? "col-sm-4 col-12 p-2 mt-sm-0 mt-5 card card2 getUp"
                  //     : "col-sm-4 col-12 p-2 mt-sm-0 mt-5 card getUp"
                  // }
                  className="col-sm-4 col-12 p-2 mt-sm-0 mt-5 card card2 getUp"
                  
                >
                  <h3>Get in touch with me:</h3>
                  <form onSubmit={sendEmail}>
                    <div className="form-group">
                      <div className="form-group mb-3">
                        <input
                          type="name"
                          className="formFields"
                          id="nameForm"
                          aria-describedby="nameHelp"
                          placeholder="Name"
                          name="from_name"
                          value={toSend.from_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          className="formFields"
                          id="emailForm"
                          name="reply_to"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={toSend.reply_to}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          className="formFields"
                          id="textAreaForm"
                          rows="3"
                          name="message"
                          value={toSend.message}
                          placeholder="Write a comment :D"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="downloadButton"
                      className="btn btn-secondary btn-lg btn-block contact-image"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">© 2022 Victor Cano</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
