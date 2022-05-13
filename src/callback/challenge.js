// Como ejecutamos todo sobre node
// Descargar XMLHTTP request

// Instanciamos la XMLHTTPrequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'; // muestro la api donde voy a peticionar.

function fetchData (url_api , callback) {
    let xhttp = new XMLHttpRequest();
    // llamo la instancia
    xhttp.open('GET' , url_api , true);
    // true es para que se maneje de forma asincrona
    xhttp.onreadystatechange = function (event) {
        // hago la validacion para saber si ejecuto el callback
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
    xhttp.send();
}

fetchData(API , function (error1,data1) { // voy a anidar varias de estas para cada llamado
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2,data2){ // una vez que entro, voy a results, primer personaje y id -> tengo el primer personaje
        if (error2) return console.error(error2);
        fetchData(data2.origin.url , function(error3,data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})