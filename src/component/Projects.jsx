import React from "react";
import { projects } from "../data/portfolioData";

const Projects = () => (
  <section className="section" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <ul>
            {project.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
          <p className="tech-stack">
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
