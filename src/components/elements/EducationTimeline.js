import React from "react";
import TimelineItem from "./TimelineItem";
import EducationTimelineHeader from "./EducationTimelineHeader";
import Resume from "../../resume.json";
import { FaGraduationCap } from "react-icons/fa";

// Format "Month YYYY" or "Present"
const formatDate = (value) => {
  if (!value) return "Present";
  const s = String(value).toLowerCase();
  if (s === "present" || s === "current" || s === "now") return "Present";

  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value; // fall back if not a date

  return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
};

export default function EducationTimeline() {
  // unique list of years from startDate
  const years = Array.from(
    new Set(Resume.education.map((e) => new Date(e.startDate).getFullYear()))
  );

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-info">{new Date().getFullYear()}</span>
      </header>

      <div className="timeline-item">
        <div className="timeline-marker is-info" />
        <div className="timeline-content" />
      </div>

      {years.map((year) => {
        const items = Resume.education.filter(
          (e) => new Date(e.startDate).getFullYear() === year
        );

        return (
          <React.Fragment key={year}>
            <EducationTimelineHeader year={year} />
            {items.map((item, idx) => {
              const range = `${formatDate(item.startDate)} – ${formatDate(
                item.endDate || "Present"
              )}`;
              const summary = `${item.studyType} in ${item.area}${
                item.x_city || item.x_country
                  ? ` (${item.x_city || ""}${
                      item.x_city && item.x_country ? ", " : ""
                    }${item.x_country || ""})`
                  : ""
              }`;

              return (
                <TimelineItem
                  key={`${year}-${idx}-${item.institution}`}
                  date={range}
                  company={item.institution}
                  summary={summary}
                  icon={<FaGraduationCap />}
                  color="is-info"
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
