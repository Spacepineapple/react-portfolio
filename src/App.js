import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import ProjectGallery from "./components/pages/ProjectGallery";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes basename="react-portfolio">
          <Route path="/" element={<Home />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
