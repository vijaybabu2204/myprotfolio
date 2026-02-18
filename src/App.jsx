import React from "react";
import Header from "./component/Header";
import Summary from "./component/Summary";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Achievements from "./component/Achievements";
import CodingProfiles from "./component/CodingProfiles";
import Footer from "./component/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-animations">
        <div className="bg-dot d1"></div>
        <div className="bg-dot d2"></div>
        <div className="bg-dot d3"></div>
        <div className="bg-dot d4"></div>
        <div className="bg-dot d5"></div>
        <div className="bg-dot d6"></div>
        <div className="bg-dot d7"></div>
        <div className="bg-dot d8"></div>
      </div>

      <div className="app">
        <Header />
        <main>
          <Summary />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <CodingProfiles />
        </main>
        <Footer />
      </div>
    </>
  );
};


export default App;
