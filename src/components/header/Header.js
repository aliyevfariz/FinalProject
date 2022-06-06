import React from "react";

import { BsMouse } from "react-icons/bs";

import phoneHeader from "../../assets/phone-header-bg.png";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" >
          <h1>
            <span>The world's leading</span>
            <span>cross-platform secure</span>
            <span>messaging system</span>
          </h1>
          <p className="u-text-small">
            SocialX is a Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id qui
            et!
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default Header;
