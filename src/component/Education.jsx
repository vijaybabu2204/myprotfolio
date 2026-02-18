import React from "react";
import { education } from "../data/portfolioData";

const Education = () => (
  <section className="section">
    <h2>Education</h2>
    {education.map((edu) => (
      <div key={edu.degree} className="edu-card">
        <h3>{edu.degree}</h3>
        <p>{edu.institution}</p>
        <p>{edu.duration}</p>
        <p>{edu.details}</p>
      </div>
    ))}
  </section>
);

export default Education;
