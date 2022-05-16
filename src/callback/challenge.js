// Como ejecutamos todo sobre node
// Descargar XMLHTTP request

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instanciamos la XMLHTTPrequest

let API = 'https://rickandmortyapi.com/api/character/'; // muestro la api donde voy a peticionar. - tiene los personajes

function fetchData (url_api , callback) {

    let xhttp = new XMLHttpRequest(); // llamo la instancia del XLMhttprequest
    
    xhttp.open('GET' , url_api , true); // abrir la http - true es para que se maneje de forma asincrona
    
    xhttp.onreadystatechange = function (event) { // hago la validacion para saber si ejecuto el callback
        
        if(xhttp.readyState === 4) { // 4 - proceso terminado
            
            if (xhttp.status === 200) { // 200 - encontre la data

                callback(null,JSON.parse(xhttp.responseText)) //parseo el resultado en json
                // callback (el error, la informacion)

            } else {

                const error = new Error('Error ' + url_api);

                return callback(error,null) // el primer elemento es el error y el segundo no tiene nada
            }
        } // 4 significa que se completó - 200 significa que encontro algo

    }

    xhttp.send(); // envio finalmente los datos
}

fetchData(API , function (error1,data1) { // voy a anidar varias de estas para cada llamado
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2,data2) { // una vez que entro, voy a results, primer personaje y id -> tengo el primer personaje
        if (error2) return console.error(error2);
        fetchData(data2.origin.url , function(error3,data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});

fetchData(API,function (error4,data4) { // voy a anidar varias de estas para cada llamado
    if (error4) return console.error(error4);
    console.log(data4)}); // asi sería un llamado individual para ver el ejemplo.

// data 1 tiene toda la data
// data 1.info.count tiene el contador de personajes
// API + data1.results[0].id es la url para el primer personaje
// data2 tiene el encapsulado del 1er personaje y data2.name tiene el nombre
// data2.origin.url es realmente la url del origen del primer personaje. Esta asi en el cuerpo de datos.
// data 3 es el paquete de datos de la locacion del 1er personaje y data3.dimension es esa dimension.