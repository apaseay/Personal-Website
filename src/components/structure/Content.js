import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
    </main>
  );
}

export default Content;
