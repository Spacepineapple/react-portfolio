import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import ProjectGallery from "./components/pages/ProjectGallery";
import ProjectPage from "./components/pages/ProjectPage";
import CV from "./components/pages/CV";
import About from "./components/pages/About";
import Research from "./components/pages/Research";
import "./style.css";

function App() {
  return (
    <Router basename="react-portfolio">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectGallery/*" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectPage/>}  />
          <Route path="/research" element={<Research/>} />
          <Route path="/cv" element={<CV/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
