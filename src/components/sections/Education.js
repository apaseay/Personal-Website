import React from "react";
import Resume from "../../resume.json";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  if (!Resume.education || Resume.education.length === 0) return null;

  return (
    <section id="education">
      <div className="section-title">
        <h2>Education</h2>
      </div>
      <VerticalTimeline>
        {Resume.education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{ background: "#6fba1c", color: "#fff" }}
            icon={<FaGraduationCap />}
            date={`${edu.startDate} – ${edu.endDate}`}
          >
            <h3 className="vertical-timeline-element-title">{edu.institution}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.studyType} in {edu.area}</h4>
            {(edu.x_city || edu.x_country) && (
              <p>
                {edu.x_city}{edu.x_city && edu.x_country ? ", " : ""}{edu.x_country}
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;