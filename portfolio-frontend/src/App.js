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
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://lab7-backend.netlify.app/.netlify/functions/api/weather")
      .then((response) => {
        if(!response.ok){
          throw new Error(`HTTP status error!: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Weather data: ",data);
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching data: ", error);
        setError(error.message);
        setLoading(false);
      });

  }, []);

  return (
    <>
      <Router>
        <Header />
        <main className="container-fluid min-vh-100 p-0 d-flex justify-content-center">
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
