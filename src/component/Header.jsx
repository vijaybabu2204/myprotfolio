import React, { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import vijayPhoto from "../assets/vijayy.png";
import "../index.css";

const Header = () => {
  const { linkedIn } = personalInfo.links;

  const fullText =
    "I build dashboards, automation workflows, and data-driven solutions using Power BI, PowerApps, and SQL.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 40; // typing speed in ms

    const interval = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-text hero-animate-left">
          <h1>Hello, I'm Vijay</h1>
          <h2>Data Analytics &amp; PowerApps Developer</h2>

          <p className="typing-line">
            {typedText}
            <span className="typing-cursor">|</span>
          </p>

          <a href={linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="hero-image hero-animate-right">
          <img src={vijayPhoto} alt="Vijay" />
        </div>
      </div>
    </header>
  );
};

export default Header;
