import React, { useEffect, useState } from "react";
import { personalInfo, typingText } from "../data/portfolioData";
import vijayPhoto from "../assets/vijayy.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../index.css";

const Header = () => {
  const { linkedIn, github, instagram } = personalInfo.links;

  const fullText = typingText;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 40;

    const interval = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));

      if (index === fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

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

          {/* SOCIAL ICONS + RESUME */}
          <div className="hero-socials">
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href={instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a
              href="/myprotfolio/Vijay_Babu_Resume.pdf"
              download
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-image hero-animate-right">
          <img src={vijayPhoto} alt="Vijay" />
        </div>
      </div>
    </header>
  );
};

export default Header;