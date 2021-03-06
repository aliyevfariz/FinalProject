import React from "react";

import { BsFillBookmarkStarFill } from "react-icons/bs";

import phoneFeatures from "../../assets/phone-features.png";

import Feature from "./Feature";
import "./Features.css";
import { FeatureList } from "./data";

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
