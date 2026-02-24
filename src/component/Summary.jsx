import { summary, dataAnalyticsPoints } from "../data/portfolioData";

const Summary = () => {
  return (
    <section className="section summary-layout">
      {/* LEFT: Summary card, a bit lower */}
      <div className="summary-left summary-card">
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>

      {/* RIGHT: Data Analytics card (higher) */}
      <div className="summary-right da-block">
        <h3>Data Analytics</h3>
        <ul>
          {dataAnalyticsPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Summary;
