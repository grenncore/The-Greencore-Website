import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Teams from "./Teams";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import E404 from "./E404";
import Dev from "./Dev";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teams" element={<Teams />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<E404 />} />
          <Route path="dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
