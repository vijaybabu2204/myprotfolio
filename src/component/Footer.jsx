import { personalInfo } from "../data/portfolioData";

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
