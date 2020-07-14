function sumarNumeros(
    numeroInicial: number,
    ...numerosASumarse: number[]
): number {
    return numeroInicial;
}

sumarNumeros(1, 2, 3, 4, 5);

function imprimir(mensaje: string): void {
    console.log('Hola' + mensaje);
}

const arregloNumero: number[] = [1, 2, 3];
const arregloNumerosDos: Array<number> = [1, 2, 3];
const arregloNumerosTres: (number | string | boolean)[] = [1, "a", true];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, "a", true];
let arregloNumerosCinco: number[] | string[] = [1, 2, 3];
arregloNumerosCinco = ['1', '2', '3'];



