import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import {useState, useEffect} from "react";

import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Router>
        <Header />
        <main className={`container-fluid min-vh-100 d-flex justify-content-center main-content bg-${theme}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
