import React from "react";
import { skills } from "../data/portfolioData";

const Skills = () => (
  <section className="section">
    <h2>Skills</h2>
    <div className="skills-grid">
      <SkillGroup title="Programming" items={skills.programming} />
      <SkillGroup title="Web Technologies" items={skills.webTechnologies} />
      <SkillGroup title="Databases" items={skills.databases} />
      <SkillGroup title="Data Analytics Tools" items={skills.analyticsTools} />
      <SkillGroup title="Platforms & Tools" items={skills.platformsTools} />
      <SkillGroup title="Problem Solving" items={skills.problemSolving} />
    </div>
  </section>
);

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3>{title}</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
