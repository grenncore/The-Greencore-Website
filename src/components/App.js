import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Teams from "./Teams";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teams" element={<Teams />} />
          <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   {/* 
    //   <Home />
    //   <About />
    //   <Blog />
    //   <Teams />
    //   <Projects />
    //   */}
    //   <Home />
    // </>
  );
}
export default App;
