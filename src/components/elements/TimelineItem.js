import React from "react";

function TimelineItem(props) {
  const { date, company, summary, icon, logo, color, side } = props;

  return (
    <div className={`timeline-item ${color || "is-success"} ${side || ""}`}>
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
        {Array.isArray(summary) ? (
          <ul className="timeline-summary">
            {summary.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="timeline-summary-text">{summary}</p>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
