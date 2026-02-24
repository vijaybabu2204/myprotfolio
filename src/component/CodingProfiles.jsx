import { personalInfo } from "../data/portfolioData";

const CodingProfiles = () => {
  const { leetcode, codechef, hackerrank } = personalInfo.links;

  return (
    <section className="coding-section">
      {/* HEADER */}
      <h2 className="coding-title">Coding Profiles</h2>

      {/* DESCRIPTION CARD */}
      <div className="coding-desc-card">
        <p>
          Explore my coding profiles where I practice problem solving and
          participate in contests.
        </p>
      </div>

      {/* PROFILE BUTTONS */}
      <div className="coding-buttons">
        <a
          href={leetcode}
          target="_blank"
          rel="noreferrer"
          className="coding-btn"
        >
          LeetCode
        </a>

        <a
          href={codechef}
          target="_blank"
          rel="noreferrer"
          className="coding-btn"
        >
          CodeChef
        </a>

        <a
          href={hackerrank}
          target="_blank"
          rel="noreferrer"
          className="coding-btn"
        >
          HackerRank
        </a>
      </div>
    </section>
  );
};

export default CodingProfiles;