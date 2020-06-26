const juan = {
    nombre: "Juan"
};
const carolina = {
    apellido: "Morales"
};

const juanCarolina = {  //Creando una nueva referencia
    ...juan,
    ...carolina,
}
juanCarolina.nombre = "Carolina"
console.log(juanCarolina)
console.log(juan)
// Cuando se repiten atributos en los objetos, se queda el último

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

const superArreglo = [
    ...arregloUno,
    ...arregloDos
]
superArreglo[0] = 100
console.log(superArreglo)
console.log(arregloUno)


