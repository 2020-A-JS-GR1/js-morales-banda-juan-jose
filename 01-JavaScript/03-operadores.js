const arreglo = [
    {
        id: 1,
        nombre: 'Juan',
        nota: 17
    },
    {
        id: 2,
        nombre: 'Jose',
        nota: 18
    },
    {
        id: 3,
        nombre: 'Cesar',
        nota: 16
    },
    {
        id: 4,
        nombre: 'Lucia',
        nota: 19
    },
    {
        id: 5,
        nombre: 'Rufo',
        nota: 20
    },
    {
        id: 6,
        nombre: 'Carlos',
        nota: 11
    },
    {
        id: 7,
        nombre: 'Ruben',
        nota: 12
    },
    {
        id: 8,
        nombre: 'Julio',
        nota: 13
    },
    {
        id: 9,
        nombre: 'Dyllan',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Lusho',
        nota: 15
    },
]

const arreglo2 = [
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

// Buscar dentro de un arreglo
// Funciones como parámetros

// find
// devolver una expresión -> truty o falsy
const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Rufo"
    }
    // no es necesario tener los tres parámetros de function
    // function siempre tendrá esos 3 atributo
);
console.log('respuestaFind', respuestaFind);  // undefined

// findIndex
// devolver una expresión -> truty o falsy
const respuestaIndex = arreglo.findIndex(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Rufo"
    }
);
console.log('respuestaIndex', respuestaIndex);  // undefined

// for each
// solo itera el arreglo
// la respuesta siempre será undefined
const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
    }
);
console.log('respuestaForEach', respuestaForEach);  // undefined

// Modificar el arreglo
// MAP
// Devolver el nuevo elemento
const respuestaMap = arreglo.map(
    // Funcion anónima -> no tiene nombre
    // function (valorActual, indiceActual, arregloCompleto) {
    //     valorActual.nota = valorActual.nota + 1;
    //     return valorActual
    // }

    // Funcion de flecha gorda
    // (valorActual) =>{
    //     const valorActual.nota = valorActual.nota + 1;
    //     return valorActual
    // }

    function (valorActual, indiceActual, arregloCompleto) {
        // se debe clonar al arreglo, sino se lo está modificando directamente
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota + 1,
        };
        return nuevoElemento;
    }
);
console.log('respuestaMap', respuestaMap);
console.log("arreglo", arreglo);

const respuestaMapNuevo = arreglo.map(
    function (valorActual, indiceActual, arregloCompleto) {
        return valorActual.nota
    }
);
console.log('respuestaMapNuevo', respuestaMapNuevo);

// Filter
// Devolver una expresión --> truty o falsy
// Cuando se quiera filtrar el arreglo
const respuestaFilter = arreglo.filter(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota >= 17;
    }
);
console.log('respuestaFilter', respuestaFilter);
console.log("arreglo", arreglo)

// DEBER:
/*
usar map y filter
*/

// SOME -> expresion
// DEVUELVE BOOLEAN
// Devuelve true cuando hay almenos un valor que cumpla
// ¿Hay ALGUNA nota menor a nueve? SI o NO
// OR
const respuestaSome = arreglo2.some(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota < 9;
    }
);
console.log('arreglo2', arreglo2)
console.log('respuestaSome', respuestaSome);


// EVERY -> expresión
// DEVUELVE UN BOOLEAN
// ¿TODAS las notas son mayores a 14? SI NO
// AND
const respuestaEvery = arreglo2.every(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota > 14;
    }
);
console.log('arreglo2', arreglo2);
console.log('respuestaEvery', respuestaEvery);

// Reduce
// reduce       izq -> der
// reduceRight  der -> izq
const respuestaReduce = arreglo2.reduce(
    //valorAcumulado, valorSActual, indice, arreglo
    (valorAcumulado, valorActual, indice, arreglo) => {
        return valorAcumulado + valorActual.nota;
    },
    0  // Acumulador
)
console.log('respuestaReduce', respuestaReduce)  // 146

// EJEMPLOS CON EL ACUMULADOR

const arregloEstudiantesMenoresANueve = arreglo2
    .map((valorActual) => valorActual.nota * 1.3)  // añadiendo el 30%
    .filter((nota) => nota < 9)  // busco a los < 9
const totalPuntosEstudiantes = arregloEstudiantesMenoresANueve
    .reduce((acumulado, actual) => acumulado + actual, 0)  // total
const notaPromedio = totalPuntosEstudiantes / arregloEstudiantesMenoresANueve.length
console.log('notaPromedio', notaPromedio)


