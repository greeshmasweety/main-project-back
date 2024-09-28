const axios = require('axios');
const API_KEY = '60dfab4218d7c9048b9e315960f9fb3a'; // Use your OpenWeatherMap API key here

// Fetch weather data from OpenWeather API
exports.getWeatherData = async (req, res) => {
    const location = req.params.location;

    try {
        // Fetch weather data by location
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
        
        const { lat, lon } = weatherRes.data.coord;

        // Fetch one-call weather data (includes daily and hourly forecast)
        const oneCallRes = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`);

        res.json(oneCallRes.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
};
