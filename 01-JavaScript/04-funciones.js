// JS no valida el tipo de dato que se utiliza
// ejemplo:
function soloNumeros(a, b, c) {
    return a - b + c;  // valor a devolver
}

function soloLetras(a, b, c) {  // undefined
    console.log(a, b, c)
}

soloNumeros('v', true, [1, 2, 3]);
soloNumeros();
soloNumeros(1, 2, 3, 4, 5, 6, 7, 8);
soloLetras();

//  Funciones nombradas
function funcionNombrada() {
}

funcionNombrada();

// Funciones ANONIMAS / SIN NOMBRE
// Son variables que se igualan a funciones sin nombre.
const funcionNombradaDos = function () {
};
var funcionNombradaTres = function () {
};
let funcionNombradaCuatro = function () {
};

funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

const funcionNombradaCinco = () => {
};  // Fat Arrow Function
const funcionNombradaSeis = (x) => {
    return x + 1
};
const funcionNombradaSiete = (x) => x + 1;
const funcionNombradaOcho = x => x + 1;
const funcionNombradaNueve = (x, y, z) => x + y + z;
// pueden escribirse en una sola linea
// se puede omitir el return, las llaves y los paréntesis

function sumarNumeros(numeroInicial, ...otrosNumeros) {
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0)
}
// ...otrosNumeros es un parámetro infinito
// los parámetros infinitos debe estar siempre después de una parámetro normal
sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9);