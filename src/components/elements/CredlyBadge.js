import React from "react";

/**
 * Simple image-based badge renderer.
 * Forces a predictable size using inline styles so Bulma/other CSS can't override.
 */
export default function CredlyBadge({
  imageName,
  badgeName,
  width = 140,
  height = 140,
}) {
  const imgSrc =
    imageName?.startsWith("http")
      ? imageName
      : `${process.env.PUBLIC_URL}/images/${imageName}`;

  return (
    <figure
      className="image credly-badge"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "0 auto",
        display: "inline-block",
      }}
      title={badgeName}
      aria-label={badgeName}
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
  );
}