// Arreglos en JS
const arreglo = [4, 5, 6, 7, 8, 9, 10];

const arregloTodo = [
    true, 1, 1.2, "Juan", undefined, null, {}, [5, 6, false, "Jose"]
];

// for of
for (let numero of arreglo) {  // VALORES
    console.log('numero', numero)
}

// for in
for (let indice in arreglo) {  // ÍNDICES
    console.log('numero', indice)
}

// const arreglo = [4, 5, 6, 7, 8, 9, 10];
arreglo.push(11);  // Añadir al final de un arreglo
// [4, 5, 6, 7, 8, 9, 10, 11]
arreglo.pop();  // Eliminar el último elemento
// [4, 5, 6, 7, 8, 9, 10]
arreglo.unshift(3);  // Añadir al inicio
// [3, 4, 5, 6, 7, 8, 9, 10]
arreglo.splice(0, 1);  // Desde donde, cuantos, añadir elementos
// [4, 5, 6, 7, 8, 9, 10]
arreglo.splice(0, 0, 1, 2, 3);
//console.log(arreglo)

// Buscar índice, devuelve el que encuentra primero
const indice  = arreglo.indexOf(9);
console.log('indice:', indice);
arreglo.splice(indice, 1);

// arreglo.findIndex()

