const fs = require('fs');

/*
Leer archivo, escribir al final y volver a leer
Utilizar Promesas
fs.readFile (path, codificación, callback (error, contenido))
fs.writeFile (path,contenido, codificación, callback(error))
*/
function promesaLeerArchivo(path) {
    const promesaLectura = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject('Hubo un error al leer\n', error)
                    } else {
                        console.log(contenido + '\n')
                        resolve(contenido)
                    }
                }
            )
        }
    )
    return promesaLectura
}

function promesaEscribirArchivo(path, contenido, contenidoNuevo) {
    const promesaEscritura = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido + '\n' + contenidoNuevo,
                'utf-8',
                error => {
                    if (error) {
                        reject('Hubo un error al escribir\n')
                    } else {
                        resolve('Escritura Realizada\n')
                    }
                })
        }
    )
    return promesaEscritura
}

path = './06-ejemplo.txt'
promesaLeerArchivo(path)
    .then(
        (contenido) => {
            return promesaEscribirArchivo(path, contenido, 'Saludos')
        }
    )
    .then(
        (respuesta) => {
            console.log(respuesta)
            promesaLeerArchivo(path)

        }
    )
    .catch(
        (error) => {
            console.error('Contenido catch', error)
        }
    )







