// Callbacks

// Primero defino una función común
function sum(num1 , num2) {
    return num1 + num2;
}

// Luego defino la función que será callback
function calc (num1 , num2 , callback) {
// normalmente se pone callback para identificarlo. puedo poner lo que quiero.
    return callback(num1, num2);
}

// Luego llamo a la función callback con la función interna como argumento.
console.log(calc(6,3,sum));


// otro ejemplo para trabajar con tiempos

// Función base
function date (callback) {
    console.log(new Date);
    // Accedo a la fecha de este momento
    setTimeout(function(){
        let date = new Date;
        callback(date)
    },3000);
    // a los 3000 ms ejecuta la funcion aclarada.
}

// La función impresora
function printDate (dateNow) {
    console.log(dateNow);
    // Solo imprime la función
}

date(printDate);
// Al hacer date(printDate), primero imprime la fecha actual (con el console log de date)
// luego entra al setTimeOut y a los 3seg hace printDate(new Date) -> eso es hacer el console log de printDate