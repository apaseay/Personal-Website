import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import Resume from "../../resume.json";

function Certifications() {
  return (
    <section className="section" id="certifications">
      <h1 className="title">Certifications</h1>
      <div className="container">
        <div className="columns is-multiline is-variable is-3 is-centered">
          {Resume.certificates.map((cert, index) => (
            <div key={index} className="column is-narrow has-text-centered">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${cert.name} – ${cert.issuer}`}
                title={`${cert.name} – ${cert.issuer}`}
                style={{ display: "inline-block" }}
              >
                <CredlyBadge
                  width={140}
                  height={140}
                  imageName={cert.x_imageName}
                  badgeName={`${cert.name} by ${cert.issuer}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;