import { skills } from "../data/portfolioData";

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
            <img
              src={`${import.meta.env.BASE_URL}${skill.logo}`}
              alt={skill.name}
              className="skill-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}