const inquirer = require('inquirer');
const fs = require('fs');

const pathEscuderia = './03-escuderias.json';
const pathPilotos = './03-pilotos.json';

async function main() {
    try {
        const eleccionMenuPrincipal = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menuInicial',
                    message: 'Bienvenido\n' +
                        'Elija con que desea trabajar',
                    choices: ['Escuderias', 'Pilotos', 'Salir'],
                },
            ]);
        // console.log('Respuesta', Object.values(respuesta).toString());
        // console.log('tipo', typeof Object.values(respuesta).toString());
        let respuesta = Object.values(eleccionMenuPrincipal).toString()
        console.log(respuesta)
        switch (respuesta) {
            case 'Escuderias':
                const menuEscuderias = await mostrarMenu(respuesta);
                respuesta = Object.values(menuEscuderias).toString();
                console.log(respuesta)
                switch (respuesta) {
                    case 'Listar Escuderias' :
//                        const a = await promesaLeerArchivo(pathEscuderia)
                        break;
                    case 'Crear Escuderias':

                        break;
                    case 'Modificar Escuderias':

                        break;
                    case 'Eliminar Escuderias':

                        break;
                    case 'Atras':
                        break;
                }
                break;
            case 'Pilotos':
                const menuPilotos = await mostrarMenu(respuesta);
                respuesta = Object.values(menuPilotos).toString();
                console.log(respuesta)
                switch (respuesta) {
                    case 'Listar Pilotos' :
//                        const a = await promesaLeerArchivo(pathEscuderia)
                        break;
                    case 'Crear Pilotos':

                        break;
                    case 'Modificar Pilotos':

                        break;
                    case 'Eliminar Pilotos':

                        break;
                    case 'Atras':
                        break;
                }
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

async function mostrarMenu(eleccion) {
    return await inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuEscuderias',
                message: 'Elija una opción',
                choices: [
                    'Listar ' + eleccion,
                    'Crear ' + eleccion,
                    'Modificar ' + eleccion,
                    'Eliminar ' + eleccion,
                    'Atras'],
            },
        ]);
}

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
                        console.log('en promesa')
                        //console.log(JSON.parse(contenido) + '\n');
                        console.log(contenido + '\n');
                        res(contenido);
                    }
                });
        }
    );
}

main();



