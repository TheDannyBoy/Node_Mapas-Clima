const colors = require('colors');
const { getLugar } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;


let getInfo = async(direccion) => {

    try {
        let coords = await getLugar(direccion);
        let temp = await getClima(coords.lat, coords.lng);
        return `El clima en ${ coords.direccion } es de ${ temp }`;
    } catch (err) {
        console.log('No se pudo determinar el clima');
        return err;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

// getLugar(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));


// getClima(9.9280694, -84.0907246)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));