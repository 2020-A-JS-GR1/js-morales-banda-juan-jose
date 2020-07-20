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
                        const contenido = await promesaLeerArchivo(pathEscuderia)
                        // console.log(typeof contenido)  // String
                        console.log(JSON.parse(contenido));
                        break;
                    case 'Crear Escuderia':
                        await crearEscuderia();
                        break;
                    case 'Modificar Escuderia':
                        await modificarEscuderia();
                        break;
                    case 'Eliminar Escuderia':
                        await eliminarEscuderia()
                        break;
                    case 'Salir':
                        throw ("Gracias por usar este programa");
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
                    case 'Salir':
                        throw ("Gracias por usar este programa");
                        break;
                }
                break;
            case 'Salir':
                throw ("Gracias por usar este programa");
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
                    'Salir'],
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
                        res(contenido);
                    }
                });
        }
    );
}

const promesaEscribirArchivo = (path, contenidoNuevo) => {
    return new Promise(
        (res, rej) => {
            fs.writeFile(
                path,
                contenidoNuevo,
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

async function crearEscuderia() {
    try {
        const datosEscuderia = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombreEscuderia',
                    message: 'Ingrese el nombre de la escudería',
                },
                {
                    type: 'number',
                    name: 'anioEscuderia',
                    message: 'Ingrese el año de creación de la escudería',
                },
                {
                    type: 'input',
                    name: 'paisEscuderia',
                    message: 'Ingrese el país de origen de la escudería',
                },
                {
                    type: 'confirm',
                    name: 'activaEscuderia',
                    message: '¿La escudería se encuentra compitiendo actualmente?',
                },
                {
                    type: 'number',
                    name: 'campeonatosEscuderia',
                    message: 'Ingrese la cantidad de campeonatos que ha ganado la escudería',
                },
            ]);
        const contenido = await promesaLeerArchivo(pathEscuderia)
        // console.log(typeof contenido)
        // console.log(typeof datosEscuderia)  // OBJECT
        // console.log(datosEscuderia)
        let contenidoNuevo = JSON.parse(contenido)
        contenidoNuevo.push(
            {
                "Nombre": datosEscuderia["nombreEscuderia"],
                "Creacion": datosEscuderia["anioEscuderia"],
                "Pais": datosEscuderia["paisEscuderia"],
                "Activa": datosEscuderia["activaEscuderia"],
                "Campeonatos": datosEscuderia["campeonatosEscuderia"]
            });
        // console.log('string', JSON.stringify(datosEscuderia))
        // console.log(contenidoNuevo)
        await promesaEscribirArchivo(pathEscuderia, JSON.stringify(contenidoNuevo));
    } catch (e) {
        console.log(e)
    }
}

async function modificarEscuderia() {
    try {
        const contenido = await promesaLeerArchivo(pathEscuderia)
        let arregloEscuderias = JSON.parse(contenido)
        let arregloEscuderiaEncontrada = []
        const busqueda = await inquirer.prompt(
            {
                type: 'input',
                name: 'respuestaBusqueda',
                message: 'Escriba el nombre de la escudería a modificar'
            },
        );
        arregloEscuderias.find(
            (valorActual) => {
                //console.log('valorActual', valorActual);
                //arregloEscuderiaEncontrada = valorActual
                const existe = (valorActual.Nombre === busqueda['respuestaBusqueda'])
                if (existe) {
                    arregloEscuderiaEncontrada = valorActual
                }
                return existe
            }
        );

        const datosEscuderia = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombreEscuderia',
                    message: 'Ingrese el nombre de la escudería',
                    default: arregloEscuderiaEncontrada["Nombre"],
                },
                {
                    type: 'number',
                    name: 'anioEscuderia',
                    message: 'Ingrese el año de creación de la escudería',
                    default: arregloEscuderiaEncontrada["Creacion"],
                },
                {
                    type: 'input',
                    name: 'paisEscuderia',
                    message: 'Ingrese el país de origen de la escudería',
                    default: arregloEscuderiaEncontrada["Pais"],
                },
                {
                    type: 'confirm',
                    name: 'activaEscuderia',
                    message: '¿La escudería se encuentra compitiendo actualmente?',
                    default: arregloEscuderiaEncontrada["Activa"],
                },
                {
                    type: 'number',
                    name: 'campeonatosEscuderia',
                    message: 'Ingrese la cantidad de campeonatos que ha ganado la escudería',
                    default: arregloEscuderiaEncontrada["Campeonatos"],
                },
            ]);

        arregloEscuderias.map(
            (valorActual) => {
                valorActual.Nombre = datosEscuderia["nombreEscuderia"]
                valorActual.Creacion = datosEscuderia["anioEscuderia"]
                valorActual.Pais = datosEscuderia["paisEscuderia"]
                valorActual.Activa = datosEscuderia["activaEscuderia"]
                valorActual.Campeonatos = datosEscuderia["campeonatosEscuderia"]
                return valorActual
            }
        );
        await promesaEscribirArchivo(pathEscuderia, JSON.stringify(arregloEscuderias));
    } catch (e) {
        console.log(e)
    }
}

async function eliminarEscuderia() {
    try {
        const contenido = await promesaLeerArchivo(pathEscuderia)
        let arregloEscuderias = JSON.parse(contenido)

        arregloEscuderias.forEach(
            (valorActual, indiceActual) => {
                console.log('Indice:', indiceActual)
                console.log('Escuderia:', valorActual)
            }
        )

        const escuderiaAEliminar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indice que índice de la escudería a eliminar'
                },
                {
                    type: 'confirm',
                    name: 'confirmacionEliminacion',
                    message: '¿Está seguro que desea eliminar dicha escudería?'
                },
            ]);

        if (escuderiaAEliminar["confirmacionEliminacion"]) {
            arregloEscuderias.splice(escuderiaAEliminar["numeroIndice"], 1);
            await promesaEscribirArchivo(pathEscuderia, JSON.stringify(arregloEscuderias))
            console.log('Escudería Eliminada')
        } else {
            console.log('Menos mal te arrepentiste :v')
        }
    } catch (e) {
        console.log(e)
    }


}

main();




