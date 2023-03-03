import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import ProjectGallery from './components/pages/ProjectGallery';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes basename="react-portfolio">
          <Route path="/" element={<Home />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
