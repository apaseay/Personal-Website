import React from "react";

function TimelineItem(props) {
  const { date, company, summary, icon, logo, color } = props;

  return (
    <div className={`timeline-item ${color || "is-success"}`}>
      <div className="timeline-marker is-32x32">
        {icon ? (
          icon
        ) : logo ? (
          <img src={logo} alt={`${company} logo`} />
        ) : (
          <span />
        )}
      </div>
      <div className="timeline-content">
        <p className="heading">{date}</p>
        <h1 className="title is-4">{company}</h1>
        <p style={{ maxWidth: "25em" }}>{summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
