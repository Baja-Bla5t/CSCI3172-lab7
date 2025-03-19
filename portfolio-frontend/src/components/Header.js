import "../App.css";
import React from "react";
import {useState, useEffect} from "react";

function Header() {
    //Theme switcher
    const[theme, setTheme] = useState(localStorage.getItem("theme" || "light"));
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light" );
    };
    //Weather display
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
            <div className={`d-flex justify-content-between align-items-center navbar navbar-expand-lg mb-4 bg-${theme}`} role="navigation" id="navigationBar">
                <div className="d-flex">
                    <img src="/logo192.png" alt="Theme switcher" onClick={toggleTheme}></img>
                </div>
                <div className="text-center text-white">
                    {loading && <p>Loading weather data...</p>}
                    {error && <p>Error: {error}</p>}
                    {weather && (
                        <div>
                            <h2>Weather in {weather.city}</h2>
                            <p>Temperature: {weather.temperature.current}°C</p>
                            <p>Humidity: {weather.humidity}</p>
                        </div>
                    )}
                </div>
                <div className="d-flex">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item"><a class="nav-link" href="./Home">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="./About">About</a></li>
                        <li className="nav-item"><a class="nav-link" href="./Projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </>
      );
}

export default Header;