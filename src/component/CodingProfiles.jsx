import React from "react";
import { codingCompetency } from "../data/portfolioData";

const CodingProfiles = () => (
  <section className="section">
    <h2>Coding Competency</h2>
    <ul>
      {codingCompetency.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default CodingProfiles;
