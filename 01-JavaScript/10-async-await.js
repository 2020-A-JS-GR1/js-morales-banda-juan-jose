const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res("Contenido leer archivo")
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            // res("Contenido escribir archivo");
            rej('ERROR :(')
        });
}

async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const respuestaLectura = await promesaLeerArchivo();  // Devuelve lo que esté dentro del resolve
        console.log(respuestaLectura);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.log(error);
    }
    console.log('6');
    console.log('7');
}

const respuestaEjercicio = ejercicio();
// console.log('Respuesta Ejercicio', respuestaEjercicio);
// console.log('PromesaLeerAarchivo', promesaLeerArchivo());
// console.log('PromesaEscribirArchivo', promesaEscribirArchivo());
