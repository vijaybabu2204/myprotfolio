import React from "react";
import "../index.css";

const Summary = () => {
  return (
    <section className="section summary-layout">
      {/* LEFT: Summary card, a bit lower */}
      <div className="summary-left summary-card">
        <h2>Summary</h2>
        <p>
          Passionate B.Tech student specializing in Artificial Intelligence &
          Machine Learning with strong interests in Data Analytics and problem
          solving. Skilled in Python, SQL, and Power BI for extracting insights
          and building dashboards. Experienced in data analysis, optimization
          techniques, and developing automation solutions. Eager to contribute
          to real-world projects and grow as a data-driven professional.
        </p>
      </div>

      {/* RIGHT: Data Analytics card (higher) */}
      <div className="summary-right da-block">
        <h3>Data Analytics</h3>
        <ul>
          <li>
            Proficient in data analysis using SQL, Power BI, and Excel to turn
            raw data into actionable insights.
          </li>
          <li>
            Skilled in building interactive dashboards, reports, and KPIs for
            business decision-making.
          </li>
          <li>
            Experienced in cleaning, transforming, and modeling data to support
            automation and performance optimization.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Summary;
