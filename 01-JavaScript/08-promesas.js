const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero)
            } else {
                reject('No es par :(')
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimerPromesa
}

// La promesa se ejecutará de acuerdo a elegi resolve(then) o reject(catch)
promesaEsPar(4)
    .then(  // TRY
        (numeroPar) => {
            console.log('Contenido then', numeroPar)
            return promesaElevarAlCuadrado(numeroPar)// UNA SOLA promesa
        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log('Numero par al cuadrado:', numeroParAlCuadrado)
        }
    )
    .catch(
        (error) => {
            console.error('Contenido catch', error)
        }
    )





