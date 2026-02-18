import React from "react";
import { personalInfo } from "../data/portfolioData";
import vijayPhoto from "../assets/vijayy.png"; // or your actual file name

const Header = () => {
  const { links } = personalInfo;

  return (
    <header className="hero">
      <div className="hero-left">
        <div className="hero-photo-wrapper">
          <img
            src={vijayPhoto}
            alt="Kada Vijay Babu"
            className="hero-photo"
          />
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-text">
          <h1 className="hero-title">Hello, I&apos;m Vijay</h1>
          <h2 className="hero-role">
            Data Analytics &amp; PowerApps Developer
          </h2>
          <p className="hero-sub">
            I build dashboards, automation workflows, and data-driven solutions
            using Power BI, PowerApps, and SQL.
          </p>
          <div className="hero-links">
            <a href={links.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
