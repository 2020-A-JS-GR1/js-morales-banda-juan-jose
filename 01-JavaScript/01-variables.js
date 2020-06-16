// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = "PDF";

// configuracionArchivos = "XML";
const numero = 1;  //number
const sueldo = 1.2;  // numbre
const texto = "Juan José";  // string
const apellido = "Morales";
const booleanoo = false;  // boolean
const hijos = null;  // object
const zapatos = undefined;  // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanoo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(Number("asd"))

if(true == true){  // truty
    console.log("Es Verdadero");
}else{
    console.log("Es Falso");
}

if(true == false){  // falsy
    console.log("Es Verdadero");
}else{
    console.log("Es Falso");
}

if(""){  // falsy
    console.log("Es Verdadero");
}else{
    console.log("Es Falso");
}

if("Juan"){  // truty
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(-1){  // truty
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(0){  // falsy
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(1){  // truty
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(null){  // falsy
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(undefined){  // falsy
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// Orden de Importancia
// 1) const
// 2) let ->
// 3) nunca utilizar el var ->


// Objetos JS (JSON) arreglos -> no son los archivos JSON

const juan = {
    nombre: "Juan",  // llave: valor,
    "apellido": "Morales",  // se puede poner la llave con comillas pero no se recomienda
    edad: 21,
    hijos: null,
    zapatos: undefined,
    ropa: {
        color: "naranja",
        talla: "M"
    },
    mascotas: ["Rufo", "Juamba", "Julien"], // Arreglo
};  // object
// Poner , siempreal final del valor en un objeto.
// Acceder a los datos y propiedades de un objeto
juan.nombre;  // "Juan"
juan.apellido;  // "Morales"
juan["nombre"];  // "Juan"

console.log(juan);
juan.nombre = "Jose";
console.log((juan));
juan["nombre"] = "Juan";
console.log((juan));
juan.sueldo;
console.log((juan.sueldo));  // undefined
juan.sueldo = 1.2;
console.log((juan.sueldo));  // 1.2
juan["gastos"] = 0.8;
console.log((juan.gastos));  // 0.8
juan.gastos = undefined;
console.log((juan.gastos));  // undefined

console.log(Object.keys(juan));
console.log(Object.values(juan));
delete juan.gastos; // eliminará la llave "gastos"
console.log(Object.keys(juan));
console.log(Object.values(juan));

//  Lista de variables por valor en JS
//  number, string, boolean y undefined
let edadJuan = 21;
let edadJose = edadJuan;
console.log(edadJuan);  // 21
console.log(edadJose);  // 21
edadJuan = edadJuan + 1;
console.log(edadJuan);  // 22
console.log(edadJose);  // 21


//  Lista de variables por referencia en JS
let carlos = {
    nombre: "Carlos",
};
// let ruben = carlos;  // Aquí no se clona al objeto, se está referenciando al mismo espacio de memoria
// console.log(carlos);  // Carlos
// console.log(ruben);  // Carlos
// ruben.nombre = "Ruben"
// console.log(carlos);  // Ruben
// console.log(ruben);  // Ruben
// delete  carlos.nombre;
// console.log(carlos);  // {}
// console.log(ruben);  // {}

let ruben = Object.assign({},carlos);
console.log(carlos);  // Carlos
console.log(ruben);  // Carlos
ruben.nombre = "Ruben";
delete carlos.nombre;
console.log(carlos);  // {}
console.log(ruben);  // Ruben


// const arregloNumeros = {
//
// }  // object
//
// console.log(juan);
// console.log(arregloNumeros);


