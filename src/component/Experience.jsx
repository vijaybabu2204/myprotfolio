import React from "react";
import { experiences } from "../data/portfolioData";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-area">
                <div className="experience-icon-box">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
              </div>
              <span className="experience-duration">{exp.duration}</span>
            </div>

            <ul className="experience-details">
              {exp.points.map((point, idx) => (
                <li key={idx} className="experience-detail-item">{point}</li>
              ))}
            </ul>

            {exp.certificate && (
              <div className="experience-footer">
                <span className="verify-label">VERIFY INTERNSHIP</span>
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
