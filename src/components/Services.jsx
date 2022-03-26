import React from "react";
import focused from "../images/img-01.jpg";
import graphics from "../images/img-02.jpg";

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="title-container">Services</h2>
      <div className="services__grid-container">
        <div className="services__design__info services__design__info--brand">
          <h3 className="services__heading">DESIGN</h3>
          <h1 className="services__title">Brand identity</h1>
          <p className="services__paragraph">
            Creating and developing brands with ambition. Cut through the noise
            and speak directly to the people that matter to you. Supporting your
            proposition and positioning you for success.
          </p>
        </div>
        <div className="services__img-container">
          <img src={focused} alt="focused-img" />
        </div>
        <div className="services__img-container">
          <img src={graphics} alt="graphics-img" />
        </div>
        <div className="services__design__info services__design__info--graphic">
          <h3 className="services__heading">DESIGN</h3>
          <h1 className="services__title">Graphic design</h1>
          <p className="services__paragraph">
            Bringing creative imagination into reality, we design with purpose
            and no jargon, simply enticing and engaging with your audience. From
            bold brand campaigns to concise content, our team is committed to
            making you stand out from the crowd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
