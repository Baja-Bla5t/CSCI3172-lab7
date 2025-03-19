import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import {useState, useEffect} from "react";

import Home from './components';
import About from './components';
import Projects from './components';
import Header from './components';
import Footer from './components';
import ErrorPage from './components/ErrorPage';

function App() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch("https://lab7-backend.netlify.app/.netlify/functions/api")
    .then((response) => response.json())
    .then((data) => setState(data))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    
    <div className="container text-center">
      <h1>Welcome to My Full-Stack App </h1>
      <p>This is a React app styled with Bootstrap 5.</p>
      {state ? (<p>{state.message}</p>) : (<p>Loading...</p>)}
      {loading && <p>Loading weather data...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.city}, {weather.country}</h2>
          <p>Temperature: {weather.temperature.current}°C</p>
          <p>Feels Like: {weather.temperature.feels_like}°C</p>
          <p>Min: {weather.temperature.min}°C | Max: {weather.temperature.max}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s ({weather.wind.direction}°)</p>
        </div>
      )}
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
    </div>
  );
}
export default App;
