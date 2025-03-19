const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
const router = express.Router();

//Weather
const API_KEY = process.env.API_KEY;
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&&units=metric&appid=${API_KEY}`;

router.get('/weather', async (req, res) => {
    try {
        let response = await fetch(weatherAPI);
        response = await response.json();
        // Extract required fields
        const weatherData = {
            city: response.name,
            country: response.sys.country,
            temperature: {
                current: response.main.temp,
                feels_like: response.main.feels_like,
                min: response.main.temp_min,
                max: response.main.temp_max,
            },
            wind: {
                speed: response.wind.speed,
                direction: response.wind.deg
            },
            humidity: response.main.humidity
        };
        res.status(200).json(weatherData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
});

//Projects
console.log("Current Directory: ",__dirname);
const projectPath = path.resolve(__dirname,"..","projects.json");
console.log("Project Path: ",projectPath);
router.get('/projects', (req, res) => {
    fs.readFile(projectPath,"utf8", (err, data) => {
        if(err){
            console.error("There was an error fetching projects: ", err);
            res.status(500).json({error : "Internal Server Error"});
            return;
        }
        console.log("Data: ", res.json(JSON.parse(data)));
        res.json(JSON.parse(data));
    });
});

app.use('/.netlify/functions/api', router);
module.exports = app;
module.exports.handler = serverless(app);