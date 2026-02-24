import React from "react";
import Header from "./component/Header";
import Summary from "./component/Summary";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Achievements from "./component/Achievements";
import CodingProfiles from "./component/CodingProfiles";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import DataBackground from "./component/DataBackground";
import "./index.css";

const App = () => {
  return (
    <>
      <DataBackground />

      <div className="app">
        <Header />
        <main>
          <Summary />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
