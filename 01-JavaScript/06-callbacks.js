const fs = require('fs');

console.log('Primero');

fs.readFile(  // ASÍNCRONO
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {  // CALLBACK
        console.log('Segundo')
        if (error) {
            console.error('Hubo un error', error)
        } else {
            console.error(contenido)
        }
    }
)

const suma = 5 + 3
console.log(suma)
console.log(('Final'));






