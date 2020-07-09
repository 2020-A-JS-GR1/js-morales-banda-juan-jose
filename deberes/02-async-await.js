const fs = require('fs');
/*
Hacer una función que reciba el path y el contenido nuevo de un archvo.
Leer archivo, escribir al final y volver a leer
Utilizar Promesas
fs.readFile (path, codificación, callback (error, contenido))
fs.writeFile (path,contenido, codificación, callback(error))
*/

const promesaLeerArchivo = (path) => {
    return new Promise(
        (res, rej) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log('Hubo un error al leer\n', error);
                        rej(error);
                    } else {
                        console.log(contenido + '\n');
                        res(contenido);
                    }
                });
        }
    );
}

const promesaEscribirArchivo = (path, contenido, contenidoNuevo) => {
    return new Promise(
        (res, rej) => {
            fs.writeFile(
                path,
                contenido + '\n' + contenidoNuevo,
                'utf-8',
                error => {
                    if (error) {
                        console.log('Hubo un error al escribir\n', error);
                        rej(error);
                    } else {
                        res('Escritura Realizada\n');
                    }
                });
        });
}

async function ejercicio(path, contenidoNuevo) {
    try {
        const contenido = await promesaLeerArchivo(path);
        await promesaEscribirArchivo(path, contenido, contenidoNuevo);
        await promesaLeerArchivo(path);
    } catch (error) {
        console.log(error);
    }
}

path = './02-async-await-texto.txt';
contenidoNuevo = 'Que tal';
const rerspuestaEjercicio = ejercicio(path, contenidoNuevo);