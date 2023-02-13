import React from "react";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";
import { BsSignpost2 } from "react-icons/bs";
import post from "../../assests/icons/post.svg";
import map from "../../assests/icons/map.svg";
import trek from "../../assests/icons/trek.svg";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__overlay"></div>
      <div className="footer__inner-container">
        <h1 className="footer__cta">Join our Newsletter for latest updates!</h1>
        <p className="footer__updates">Get Latest updates daily.</p>
        <div className="footer__feild-container">
          <form className="footer__form">
            <div className="fields">
              <input
                type="text"
                className="footer__name-field"
                placeholder="Name"
              />
              <input
                type="email"
                className="footer__email-field"
                placeholder="E-mail"
              />
            </div>
            <div>
              <button type="button" className="footer__sub-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="footer__contact-container">
          <div className="footer__contact-phone">
            <img src={post} alt="" />
            <h3>Give us a call</h3>
            <p>Office Landline : +91 12345 67890</p>
            <p>Mobile : +91 12345 67890</p>
          </div>
          <div className="footer__contact-address">
            <img src={trek} alt="" />
            <h3>Come and drop by</h3>
            <p>Phase 11, Mohali</p>
            <p>Punjab, India</p>
          </div>
          <div className="footer__contact-socials">
            <img src={map} alt="" />
            <h3>Send us a Message</h3>
            <p>youremail@gmail.com</p>
            <p>travello@business.com</p>
          </div>
        </div>
        <p className="footer__copyright">
          Copyright &copy;2023 All rights reserved | Powered By : Appformers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
