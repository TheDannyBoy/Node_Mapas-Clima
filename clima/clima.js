const axios = require('axios');


const getClima = async(lat, lng) => {
    const API_KEY = 'b917b9c76009a6038f13189ebd64d7c2';
    const URL = encodeURI(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`);
    let resp = await axios.get(URL);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}