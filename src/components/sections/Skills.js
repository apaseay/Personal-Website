import React from "react";
import Resume from "../../resume.json";
import Skill from "../elements/Skill"


function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns is-multiline">
          {Resume.skills.map((skill, indx) => (
            <div key={indx} className="column is-3">
              <Skill
                text={skill.name}
                icon={skill.x_icon}
                description={skill.x_description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
