import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { LinksContext } from "../../../state/links-contex";
const Contact = () => {
  const { path } = useContext(LinksContext);
  return (
    <main className="contact">
      <img
        src={require("../../../images/sharon-anima.jpg")}
        alt="sharon anima"
        className="contact__img"
      />
      <div className="contact__content">
        <div className="contact__row">
          <FontAwesomeIcon
            icon={faPhoneSquareAlt}
            className="contact__icon phone contact__icon--phone"
          />
          <p className="contact__text">054-4666355</p>
        </div>
        <div className="contact__row">
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className="contact__icon contact__icon--gmail"
          />
          <p className="contact__text">sharonzissu10@gmail.com</p>
        </div>
        <a
          href="http://www.linkedin.com/in/sharon-zissu-9b9812187"
          className="contact__link"
        >
          <div className="contact__row">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contact__icon contact__icon--linkdin"
            />
            <p className="contact__text">
              linkedin.com/in/sharon-zissu-9b9812187
            </p>
          </div>
        </a>

        <a href="http://www.github.com/SharonZissu" className="contact__link">
          <div className="contact__row">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="contact__icon contact__icon--github"
            />
            <p className="contact__text">github.com/SharonZissu</p>
          </div>
        </a>

        <a
          href="http://www.facebook.com/sharon.zissu"
          className="contact__link"
        >
          <div className="contact__row">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="contact__icon contact__icon--facebook"
            />
            <p className="contact__text">facebook.com/sharon.zissu</p>
          </div>
        </a>

        <img
          src={require("../../../images/sharon-anima4.png")}
          alt="sharon anima 2"
          className="photo-up-right"
          style={{
            right: path === "contact" ? "0" : "10rem",
            opacity: path === "contact" ? "1" : "0",
          }}
        />

        <img
          src={require("../../../images/sharon-anima3.png")}
          alt="sharon anima 3"
          className="photo-down"
        />
      </div>
    </main>
  );
};

export default Contact;
