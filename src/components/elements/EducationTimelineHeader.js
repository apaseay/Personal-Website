import React from "react";

function EducationTimelineHeader(props) {
  return (
    <header className="timeline-header">
      <span className="tag is-info">{props.year}</span>
    </header>
  );
}

export default EducationTimelineHeader;