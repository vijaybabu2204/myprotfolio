import React from "react";
import "../index.css";

const CodingProfiles = () => {
  return (
    <section className="section coding-section">
      <div className="coding-text">
        <h2>Coding Profiles</h2>
        <p>
          Explore my coding profiles where I practice problem solving and
          participate in contests.
        </p>
      </div>

      <div className="coding-buttons">
        <a
          href="https://leetcode.com/vijay2344"
          target="_blank"
          rel="noreferrer"
          className="coding-btn"
        >
          LeetCode
        </a>

        <a
          href="https://www.codechef.com/users/vijay2344"
          target="_blank"
          rel="noreferrer"
          className="coding-btn"
        >
          CodeChef
        </a>

        <a
          href="https://www.hackerrank.com/vijaybabau026"
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
