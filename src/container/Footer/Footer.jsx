import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Ave Marie Street, Road 24, Hurdland.</p>
        <p className="p__opensans">+1-909-909-2339</p>
        <p className="p__opensans">+1-909-909-2009</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          " The Best Way to Find Yourself is to lose Yourself to the service of
          Others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Firday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Sat - Sun:</p>
        <p className="p__opensans">07:00am - 10:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
