const fs = require('fs');

/*
Hacer una función que me acepte como parámetro una variable
con el path del a rchivo y el contenido a agregar al archivo.
La función debe tomar estos dos parámetros y leer el archivo
y añadir el texto al final del archivo
// fs.readFile (path, codificación, callback (error, contenido))
// fs.writeFile (path,contenido, codificación, callback(error))
*/

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenido) => {
            if (error) {
                console.error('Hubo un error', error)
            } else {
                fs.writeFile(
                    path,
                    contenido + '\n' + contenidoNuevo,
                    'utf-8',
                    error => {
                        if (error) {
                            console.error('Hubo un error al escribir', error)
                        } else {
                            console.log('No hubo errores')
                        }
                    })
            }
        })
}

path = './06-ejemplo.txt'
escribirArchivo(path, 'Muy buenas a todos')







