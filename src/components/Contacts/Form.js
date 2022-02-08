import React, { useState } from "react";
import CV from "../../assets/files/CV_VictorCano.pdf";
import "./Form.css";
import { send } from "emailjs-com";
import swal from "sweetalert";

function Form() {
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
    <div className="container text-secondary">
      <div className="row d-flex flex-column justify-content-center align-items-center text-center vh-100 scrollControl">
        <div className="col-sm-6 col-12 mb-3">
          <div>
            <h2>If you want to contact me, fill out this form:</h2>
          </div>
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
              className="btn btn-secondary btn-lg btn-block"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-6 col-12 mb-5 mb-sm-0">
          <div>
            <h2>
              Or If you want to know more about my work, click this button:
            </h2>
          </div>
          <div className="col-12 mt-5 ml-2 mb-5 mb-sm-0">
            <a
              id="downloadButton"
              className="btn btn-secondary btn-lg btn-block"
              download
              href={CV}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
