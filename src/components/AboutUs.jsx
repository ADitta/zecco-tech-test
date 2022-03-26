import React from "react";

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <h2 className="title-container">About us</h2>
      <div className="about__info-container">
        <div className="about__title-container">
          <h1 className="about__title">
            We are designers & cognitive scientists
          </h1>
        </div>
        <div className="about__paragraph-container">
          <p className="about__paragraph">
            With a structured understanding of the mind, we map purposeful
            product strategies and create aesthetic experiences. We work in
            dedicated project teams, blending DesignOps, user research, UX
            design, UI and engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
