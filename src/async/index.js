// Armo mi promesa basica
const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'),3000)
            : reject(new Error('Test Error'))
    });
}

// Implemento mi async / await
const doSomething = async () => {
    const something = await doSomethingAsync();
    // Esperará a que se haga doSomethingAsync()
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


// Para poder capturar los errores de la promesa

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error){
        console.error(error)
    }
}

console.log('Before another function');
anotherFunction();
console.log('After another function');
