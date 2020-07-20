const inquirer = require('inquirer');
const fs = require('fs');

const pathEscuderias = './03-escuderias.json';
const pathPilotos = './03-pilotos.json';
const pathEquipo = './03-equipo.json';

async function main() {
    try {
        const eleccionMenuPrincipal = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menuInicial',
                    message: 'Bienvenido\n' +
                        'Elija con que desea trabajar',
                    choices: ['Escuderias',
                        'Pilotos',
                        'Asignar Piloto',
                        'Ver Equipos',
                        'Salir'],
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
                        await leerEscuderia();
                        break;
                    case 'Crear Escuderias':
                        await crearEscuderia();
                        break;
                    case 'Modificar Escuderias':
                        await modificarEscuderia();
                        break;
                    case 'Eliminar Escuderias':
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
                        await leerPiloto();
                        break;
                    case 'Crear Pilotos':
                        await crearPiloto();
                        break;
                    case 'Modificar Pilotos':
                        await modificarPiloto();
                        break;
                    case 'Eliminar Pilotos':
                        await eliminarPiloto();
                        break;
                    case 'Salir':
                        throw ("Gracias por usar este programa");
                        break;
                }
                break;
            case 'Asignar Piloto':
                await asignarPiloto();
                break;
            case 'Ver Equipos':
                await leerEquipo();
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

async function leerEscuderia() {
    try {
        const contenido = await promesaLeerArchivo(pathEscuderias)
        let arregloEscuderias = JSON.parse(contenido)

        arregloEscuderias.forEach(
            (valorActual, indiceActual) => {
                console.log('Indice:', indiceActual)
                console.log('Escuderia:', valorActual)
            }
        )
    } catch (e) {
        console.log(e)
    }
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
        const contenido = await promesaLeerArchivo(pathEscuderias)
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
        await promesaEscribirArchivo(pathEscuderias, JSON.stringify(contenidoNuevo));
    } catch (e) {
        console.log(e)
    }
}

async function modificarEscuderia() {
    try {
        const contenido = await promesaLeerArchivo(pathEscuderias)
        let arregloEscuderias = JSON.parse(contenido)
        let arregloEscuderiaEncontrada = []

        await leerEscuderia();

        const escuderiaAModificar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indique el índice de la escudería a modificar'
                },
            ]);

        arregloEscuderias.find(
            (valorActual, indiceActual) => {
                //console.log('valorActual', valorActual);
                //arregloEscuderiaEncontrada = valorActual
                //const existe = (indiceActual === escuderiaAModificar['numeroIndice'])
                if (indiceActual === escuderiaAModificar['numeroIndice']) {
                    arregloEscuderiaEncontrada = valorActual;
                }
                //return existe
            }
        );

        console.log(arregloEscuderiaEncontrada)

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
            (valorActual, indiceActual) => {
                if (indiceActual === escuderiaAModificar["numeroIndice"]) {
                    valorActual.Nombre = datosEscuderia["nombreEscuderia"]
                    valorActual.Creacion = datosEscuderia["anioEscuderia"]
                    valorActual.Pais = datosEscuderia["paisEscuderia"]
                    valorActual.Activa = datosEscuderia["activaEscuderia"]
                    valorActual.Campeonatos = datosEscuderia["campeonatosEscuderia"]
                }
                return valorActual
            }
        );
        await promesaEscribirArchivo(pathEscuderias, JSON.stringify(arregloEscuderias));
    } catch (e) {
        console.log(e)
    }
}

async function eliminarEscuderia() {
    try {
        const contenido = await promesaLeerArchivo(pathEscuderias);
        let arregloEscuderias = JSON.parse(contenido);

        await leerEscuderia();

        const escuderiaAEliminar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indice el índice de la escudería a eliminar'
                },
                {
                    type: 'confirm',
                    name: 'confirmacionEliminacion',
                    message: '¿Está seguro que desea eliminar dicha escudería?'
                },
            ]);

        if (escuderiaAEliminar["confirmacionEliminacion"]) {
            arregloEscuderias.splice(escuderiaAEliminar["numeroIndice"], 1);
            await promesaEscribirArchivo(pathEscuderias, JSON.stringify(arregloEscuderias))
            console.log('Escudería Eliminada')
        } else {
            console.log('Menos mal te arrepentiste :v')
        }
    } catch (e) {
        console.log(e)
    }


}

async function leerPiloto() {
    try {
        const contenido = await promesaLeerArchivo(pathPilotos);
        let arregloPilotos = JSON.parse(contenido);

        arregloPilotos.forEach(
            (valorActual, indiceActual) => {
                console.log('Indice:', indiceActual);
                console.log('Piloto:', valorActual);
            }
        )
    } catch (e) {
        console.log(e);
    }
}

async function crearPiloto() {
    try {
        const datosPiloto = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombrePiloto',
                    message: 'Ingrese el nombre del piloto',
                },
                {
                    type: 'input',
                    name: 'apellidoPiloto',
                    message: 'Ingrese el apellido del piloto',
                },
                {
                    type: 'input',
                    name: 'paisPiloto',
                    message: 'Ingrese el país de origen del piloto',
                },
                {
                    type: 'number',
                    name: 'polesPiloto',
                    message: 'Ingrese la cantidad de pole positions que tiene el piloto',
                },
                {
                    type: 'number',
                    name: 'victoriasPiloto',
                    message: 'Ingrese la cantidad de victorias que tiene el piloto',
                },
                {
                    type: 'number',
                    name: 'campeonatosPiloto',
                    message: 'Ingrese la cantidad de campeonatos que ha ganado el piloto',
                },
                {
                    type: 'confirm',
                    name: 'retiradoPiloto',
                    message: '¿El piloto se encuentra retirado?',
                },
            ]);
        const contenido = await promesaLeerArchivo(pathPilotos)
        let contenidoNuevo = JSON.parse(contenido)
        contenidoNuevo.push(
            {
                "Nombre": datosPiloto["nombrePiloto"],
                "Apellido": datosPiloto["apellidoPiloto"],
                "Pais": datosPiloto["paisPiloto"],
                "Poles": datosPiloto["polesPiloto"],
                "Victorias": datosPiloto["victoriasPiloto"],
                "Campeonatos": datosPiloto["campeonatosPiloto"],
                "Retirado": datosPiloto["retiradoPiloto"]
            });
        await promesaEscribirArchivo(pathPilotos, JSON.stringify(contenidoNuevo));
    } catch (e) {
        console.log(e)
    }
}

async function modificarPiloto() {
    try {
        const contenido = await promesaLeerArchivo(pathPilotos)
        let arregloPilotos = JSON.parse(contenido)
        let arregloPilotoEncontrado = []

        await leerPiloto();

        const pilotoAModificar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indique el índice del piloto a modificar'
                },
            ]);

        arregloPilotos.find(
            (valorActual, indiceActual) => {
                if (indiceActual === pilotoAModificar['numeroIndice']) {
                    arregloPilotoEncontrado = valorActual;
                }
                //return existe
            }
        );

        const datosPiloto = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombrePiloto',
                    message: 'Ingrese el nombre del piloto',
                    default: arregloPilotoEncontrado["Nombre"],
                },
                {
                    type: 'input',
                    name: 'apellidoPiloto',
                    message: 'Ingrese el apellido del piloto',
                    default: arregloPilotoEncontrado["Apellido"],
                },
                {
                    type: 'input',
                    name: 'paisPiloto',
                    message: 'Ingrese el país de origen del piloto',
                    default: arregloPilotoEncontrado["Pais"],
                },
                {
                    type: 'number',
                    name: 'polesPiloto',
                    message: 'Ingrese la cantidad de pole positions que tiene el piloto',
                    default: arregloPilotoEncontrado["Poles"],
                },
                {
                    type: 'number',
                    name: 'victoriasPiloto',
                    message: 'Ingrese la cantidad de victorias que tiene el piloto',
                    default: arregloPilotoEncontrado["Victorias"],
                },
                {
                    type: 'number',
                    name: 'campeonatosPiloto',
                    message: 'Ingrese la cantidad de campeonatos que ha ganado el piloto',
                    default: arregloPilotoEncontrado["Campeonatos"],
                },
                {
                    type: 'confirm',
                    name: 'retiradoPiloto',
                    message: '¿El piloto se encuentra retirado?',
                    default: arregloPilotoEncontrado["Retirado"],
                },
            ]);

        arregloPilotos.map(
            (valorActual, indiceActual) => {
                if (indiceActual === pilotoAModificar["numeroIndice"]) {
                    valorActual.Nombre = datosPiloto["nombrePiloto"];
                    valorActual.Apellido = datosPiloto["apellidoPiloto"];
                    valorActual.Pais = datosPiloto["paisPiloto"];
                    valorActual.Poles = datosPiloto["polesPiloto"];
                    valorActual.Victorias = datosPiloto["victoriasPiloto"];
                    valorActual.Campeonatos = datosPiloto["campeonatosPiloto"];
                    valorActual.Retirado = datosPiloto["retiradoPiloto"];
                }
                return valorActual
            }
        );

        await promesaEscribirArchivo(pathPilotos, JSON.stringify(arregloPilotos));
    } catch (e) {
        console.log(e)
    }
}

async function eliminarPiloto() {
    try {
        const contenido = await promesaLeerArchivo(pathPilotos)
        let arregloPilotos = JSON.parse(contenido)

        await leerPiloto();

        const pilotoAEliminar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indique el índice del piloto a eliminar'
                },
                {
                    type: 'confirm',
                    name: 'confirmacionEliminacion',
                    message: '¿Está seguro que desea eliminar dicho piloto?'
                },
            ]);

        if (pilotoAEliminar["confirmacionEliminacion"]) {
            arregloPilotos.splice(pilotoAEliminar["numeroIndice"], 1);
            await promesaEscribirArchivo(pathPilotos, JSON.stringify(arregloPilotos))
            console.log('Piloto Eliminado')
        } else {
            console.log('Menos mal te arrepentiste :v')
        }
    } catch (e) {
        console.log(e)
    }
}

async function leerEquipo() {
    try {
        const contenido = await promesaLeerArchivo(pathEquipo)
        let arregloEquipo = JSON.parse(contenido)

        arregloEquipo.forEach(
            (valorActual, indiceActual) => {
                console.log('Indice:', indiceActual)
                console.log('Equipo:', valorActual)
            }
        )
    } catch (e) {
        console.log(e);
    }
}

async function asignarPiloto() {
    try {
        const contenidoPilotos = await promesaLeerArchivo(pathPilotos);
        const contenidoEscuderias = await promesaLeerArchivo(pathEscuderias);
        let arregloPilotos = JSON.parse(contenidoPilotos);
        let arregloEscuderias = JSON.parse(contenidoEscuderias);
        let arregloPilotoEncontrado = [];
        let arregloEscuderiaEncontrada = [];

        await leerPiloto();

        const pilotoParaAsignar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indique el índice del piloto que asignará a una escudería'
                },
            ]);

        arregloPilotos.find(
            (valorActual, indiceActual) => {
                if (indiceActual === pilotoParaAsignar['numeroIndice']) {
                    arregloPilotoEncontrado = valorActual;
                }
                //return existe
            }
        );

        await leerEscuderia();

        const escuderiaParaAsignar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'numeroIndice',
                    message: 'Indique el índice de la escudería a la que asignará el piloto'
                },
            ]);

        arregloEscuderias.find(
            (valorActual, indiceActual) => {
                if (indiceActual === escuderiaParaAsignar['numeroIndice']) {
                    arregloEscuderiaEncontrada = valorActual;
                }
                //return existe
            }
        );

        const contenido = await promesaLeerArchivo(pathEquipo)
        let contenidoNuevo = JSON.parse(contenido)
        contenidoNuevo.push(
            {
                "Escuderia": arregloEscuderiaEncontrada["Nombre"],
                "Piloto": arregloPilotoEncontrado["Nombre"] + ' ' + arregloPilotoEncontrado["Apellido"],
            });
        await promesaEscribirArchivo(pathEquipo, JSON.stringify(contenidoNuevo));
        console.log('Piloto asignado');
    } catch (e) {
        console.log(e)
    }
}

main();
