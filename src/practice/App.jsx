import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';

// import ConfirmButton from './ConfirmButton';

export function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/about" element={<About />} />
        <Router path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}