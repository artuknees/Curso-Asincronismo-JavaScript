// A partir de aca se usa ES6

const somethingWillHappen = () => { // defino como arrow function
    return new Promise((resolve,reject) => {
        if (true) { // chequeo si verdadero es verdadero
            resolve ('hey! salió el resolve');
        } else {reject('ups. Salió reject');
    }
    });
};

// El llamado de la promesa debe tener then y catch
somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

// Esta es la estructura basica de una promesa.


// hacemos otra promesa

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if (true) { // settimeout recibe una funcion y el tiempo de ejecucion
            setTimeout(()=>{
                resolve('True - resolve');
            },2000)
        } else { // Es bueno trabajar el error de esta forma
            const error = new Error('Shit - Error');
            reject(error);
        }
    });
};

somethingWillHappen2()
.then(response => console.log(response))
// podria desencadenar otro then si quisiera
.catch(err => console.error(err));


// para correr todas las promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
}) // devuleve un arreglo con la respuesta de ambas.
.catch(err => {
    console.error(err)
});