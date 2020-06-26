/*
Deber 01

Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones:

Por cada vocal dentro de la palabra del estudiante 0.1 decimas
Por cada consonante dentro de la palabra del estudiante 0.05 decimas

Filtren cuales personas pasaron
*/

const arregloEstudiantes = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

const arregloPasados = arregloEstudiantes
    .map(
        (valorActual, indice, arreglo) => {
            //console.log(valorActual)
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota,
            };
            let cantidadVocales = nuevoElemento.nombre.match(/[aeiou]/gi).length
            let cantidadConsonantes = nuevoElemento.nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
            nuevoElemento.nota += (cantidadVocales * 0.1) + (cantidadConsonantes * 0.05)
            //console.log(valorActual)
            return nuevoElemento
        }
    )
    .filter((elemento)=>elemento.nota > 14)

console.log("Arreglo originial:", arregloEstudiantes)
console.log("Arreglo Estudiantes Pasados:", arregloPasados)