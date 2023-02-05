import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact({ email, phoneNumber }) {
  const [hoverGithub, setHoverGithub] = React.useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = React.useState(false);
  const [hoverInstagram, setHoverInstagram] = React.useState(false);

  return (
    <section id="Contact" className="container my-5">
      <div className="d-flex lan-flex"></div>
      <h1 className="text-center head">CONTACT</h1>
      <div className="row my-5">
        <div className="col-md-6 offset-md-3">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <strong>Email:</strong>  <a className="contact-click" href={`mailto:${email}`}>{email}</a>
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> <a className="contact-click" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <a
          href="https://github.com/FadeHack"
          className="mx-3 social-icon"
          onMouseEnter={() => setHoverGithub(true)}
          onMouseLeave={() => setHoverGithub(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            style={{ color: hoverGithub ? "green" : "gray" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-maheshwari-28a303209"
          className="mx-3 social-icon"
          onMouseEnter={() => setHoverLinkedIn(true)}
          onMouseLeave={() => setHoverLinkedIn(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            style={{ color: hoverLinkedIn ? "blue" : "gray" }}
          />
        </a>
        <a
          href="https://www.instagram.com/__shivam__1000?r=nametag"
          className="mx-3 social-icon"
          onMouseEnter={() => setHoverInstagram(true)}
          onMouseLeave={() => setHoverInstagram(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="3x"
            style={{ color: hoverInstagram ? "red" : "gray" }}
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;
