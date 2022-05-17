// uso la funcion de callback pero adapto a ES6

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instanciamos la XMLHTTPrequest

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); 
        xhttp.open('GET' , url_api , true); 
        xhttp.onreadystatechange = (() =>  { 
            if(xhttp.readyState === 4) { 
                (xhttp.status == 200) // planteo un IF ternario
                    ? resolve (JSON.parse(xhttp.responseText))
                    : reject (new Error('Error',url_api))
            } 
        });
        xhttp.send();
    });
}

module.exports = fetchData;
// exporto el modulo