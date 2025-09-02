import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
        Open to opportunities where I can contribute through cloud automation, infrastructure as code, and DevOps best practices.{" "}
          <a
            href="https://github.com/apaseay"
            className="has-text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong></strong>
          </a>
        </p>

        <p style={{ marginTop: "10px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/cloud-summary-banner.png`}
            alt="Cloud Summary Banner"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </p>

        {/* Contact section */}
        <section
          id="contact"
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px"
          }}
        >
          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              style={{ width: 20 }}
            />
            <a href="mailto:aypase@gmail.com" className="has-text-white">
              aypase@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              style={{ width: 20 }}
            />
            <a
              href="https://github.com/apaseay"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-white"
            >
              github.com/apaseay
            </a>
          </div>

          {/* LinkedIn */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              style={{ width: 20 }}
            />
            <a
              href="https://linkedin.com/in/ayobamipase/"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-white"
            >
              linkedin.com/in/ayobamipase
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;