import React from "react";
import Resume from "../../resume.json";

const Education = () => {
  if (!Resume.education || Resume.education.length === 0) return null;

  return (
    <section id="education">
      <div className="section-title">
        <h2>Education</h2>
      </div>
      <div className="section-content">
        {Resume.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.studyType} in {edu.area}</h3>
            <h4>{edu.institution}</h4>
            <p className="education-dates">
              {edu.startDate} – {edu.endDate}
            </p>
            {(edu.x_city || edu.x_country) && (
              <p className="education-location">
                {edu.x_city}{edu.x_city && edu.x_country ? ", " : ""}{edu.x_country}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;