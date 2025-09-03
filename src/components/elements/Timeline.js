import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

// Format "Month YYYY" or "Present"
const formatDate = (value) => {
  if (!value) return "Present";
  const s = String(value).toLowerCase();
  if (s === "present" || s === "current" || s === "now") return "Present";

  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value; // fall back if not a date

  return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
};

export default function Timeline() {
  // unique list of years from startDate
  const years = Array.from(
    new Set(Resume.work.map((w) => new Date(w.startDate).getFullYear()))
  );

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
      </header>

      <div className="timeline-item">
        <div className="timeline-marker is-success" />
        <div className="timeline-content" />
      </div>

      {years.map((year) => {
        const items = Resume.work.filter(
          (w) => new Date(w.startDate).getFullYear() === year
        );

        return (
          <React.Fragment key={year}>
            <TimelineHeader year={year} />
            {items.map((item, idx) => {
              const range = `${formatDate(item.startDate)} – ${formatDate(
                item.endDate || "Present"
              )}`;

              return (
                <TimelineItem
                  key={`${year}-${idx}-${item.company}`}
                  date={range}
                  company={item.company}
                  summary={item.summary}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}