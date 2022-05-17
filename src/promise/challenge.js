const fetchData = require ('../utils/fetchData');
// con esto llame fetchData

const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API) // hago el fetchData de la direccion que trae todos los personajes.
.then (data => { // la promesa devuelve algo que se llama data
    console.log(data.info.count); // ahi veo la cantidad de personajes
    return fetchData(`${API}${data.results[0].id}`) // hago que devuelva otro fetchData metiendome
    // en https://rickandmortyapi.com/api/character/1 -> primer personaje
})
.then (data => {
    console.log(data.name) // extraigo el nombre
    return fetchData(data.origin.url) // devuelvo la direccion de la direccion del primer personaje
})
.then(data => {
    console.log(data.dimension) // imprimo esa info
})
.catch (err => console.error(err));

// voy retornando nuevas peticiones para ir estructurando los llamados.
// al final pongo el catch para mostrar si hay un error