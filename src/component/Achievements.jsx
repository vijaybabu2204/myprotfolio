import React from "react";
import { achievements } from "../data/portfolioData";
import {
  FaJava,
  FaTerminal,
  FaPython,
  FaCloud,
  FaCode,
  FaDatabase,
  FaSnowflake,
  FaExternalLinkAlt
} from "react-icons/fa";

const iconMap = {
  FaJava: <FaJava style={{ color: "#f89820" }} />,
  FaTerminal: <FaTerminal style={{ color: "#4ade80" }} />,
  FaPython: <FaPython style={{ color: "#3776ab" }} />,
  FaCloud: <FaCloud style={{ color: "#4285f4" }} />,
  FaCode: <FaCode style={{ color: "#e34f26" }} />,
  FaDatabase: <FaDatabase style={{ color: "#336791" }} />,
  FaSnowflake: <FaSnowflake style={{ color: "#29b5e8" }} />
};

const Achievements = () => (
  <section className="section achievements-section" id="certifications">
    <h2 className="section-title">Achievements & Certifications</h2>
    <div className="achievements-grid">
      {achievements.map((a, index) => (
        <div key={index} className="cert-card">
          <div className="cert-card-header">
            <div className="cert-icon-box">
              {iconMap[a.icon] || <FaCode />}
            </div>
            <span className="cert-code">{a.code}</span>
          </div>

          <h3 className="cert-title">{a.title}</h3>

          <div className="cert-card-footer">
            <span className="verify-label">VERIFY CERTIFICATE</span>
            {a.certificate && (
              <a
                href={a.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
