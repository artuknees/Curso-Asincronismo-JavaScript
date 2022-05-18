const fetchData = require ('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api); // espera a que se cumpla la promesa sobre url_api
        const character = await fetchData(`${API}${data.results[0].id}`); // ahora sobre el link al primer personaje
        const origin = await fetchData(character.origin.url); // ahora sobre el link al origen

        console.log(data.info.count); // imprimo el numero de personajes
        console.log(character.name); // imprimo el nombre del primer personaje
        console.log(origin.dimension); // imprimo la dimension

    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');

