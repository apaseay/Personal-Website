import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>

      <div className="hero-body">
        <div className="container">
          {/* removed the "I'm a" line */}
          <h1 className="title">{Resume.basics.label}</h1>
          <h2 className="subtitle">
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </h2>
        </div>
      </div>

      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => (
            <div key={index} className="column has-text-centered">
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="is-hovered"
                title={value.network}
              >
                <span className="icon is-medium">
                <i className={`${value.x_icon} social-icon`}></i>
                </span>
              </a>
            </div>
          ))}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;