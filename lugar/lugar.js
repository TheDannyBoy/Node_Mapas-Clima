const axios = require('axios');


const getLugar = async(direccion) => {
    const API_KEY = 'AIzaSyBVCV4aVhhSRVeYm1SGUq8GExl1xjccJEE';
    let encoderUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encoderUrl }&key=${ API_KEY }`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hya resultados para la ciudad ${ direccion }`);
    }
    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugar
}