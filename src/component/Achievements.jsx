import React from "react";
import { achievements } from "../data/portfolioData";

const Achievements = () => (
  <section className="section">
    <h2>Achievements & Certifications</h2>
    <ul>
      {achievements.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  </section>
);

export default Achievements;
