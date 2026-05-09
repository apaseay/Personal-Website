import React from "react";

export default function CredlyBadge({
  imageName,
  badgeName,
  verification,
  credential_id,
  width = 140,
  height = 140,
}) {
  const imgSrc =
    imageName?.startsWith("http")
      ? imageName
      : `${process.env.PUBLIC_URL}/images/${imageName}`;

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <a
        href={verification}
        target="_blank"
        rel="noopener noreferrer"
        title={`Verify ${badgeName}`}
      >
        <figure
          className="image credly-badge"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            margin: "0 auto",
            display: "inline-block",
          }}
        >
          <img
            src={imgSrc}
            alt={badgeName}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </figure>
      </a>

      {credential_id && (
        <div
          style={{
            fontSize: "0.75rem",
            marginTop: "0.35rem",
            color: "#555",
          }}
        >
          Verification code:
          <br />
          <strong>{credential_id}</strong>
        </div>
      )}
    </div>
  );
}