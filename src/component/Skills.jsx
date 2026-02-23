import React from "react";

const skills = [
  { logo: `${import.meta.env.BASE_URL}logos/powerapps.png`, color: "#d946ef" },
  { logo: `${import.meta.env.BASE_URL}logos/powerbi.png`, color: "#facc15" },
  { logo: `${import.meta.env.BASE_URL}logos/powerautomate.png`, color: "#60a5fa" },
  { logo: `${import.meta.env.BASE_URL}logos/sharepoint.png`, color: "#2dd4bf" },
  { logo: `${import.meta.env.BASE_URL}logos/python.png`, color: "#38bdf8" },
  { logo: `${import.meta.env.BASE_URL}logos/c.png`, color: "#94a3b8" },
  { logo: `${import.meta.env.BASE_URL}logos/sql.png`, color: "#22c55e" },
  { logo: `${import.meta.env.BASE_URL}logos/snowflake.png`, color: "#0ea5e9" },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Stack</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--glow-color": skill.color }}
          >
            <img src={skill.logo} alt="" className="skill-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}