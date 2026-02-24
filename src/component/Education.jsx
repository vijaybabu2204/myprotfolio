import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section className="section">
      <h2>Education</h2>

      {education.map((item, index) => (
        <div className="education-card" key={index}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.duration}</p>
          <p>{item.details}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
