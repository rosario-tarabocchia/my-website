import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
        <NavigationBar />
          <Home />
    <About />
    <Projects />
    <Contact />
    </div>


  );
}

export default App;
