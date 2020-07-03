const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

async function ejercicio() {
    console.log('1');
    try {
        const respuestaLectura = await promesaLeerArchivo();  // Devuelve lo que esté dentro del resolve
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    } catch (error) {
        console.log(error)
    }
}

const f = async () => {

}