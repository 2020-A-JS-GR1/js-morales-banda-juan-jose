// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutable
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
    mascotas: ["Rufo", "Juamba", "Boxy"]
};  // object

// Acceder a los datos de un objeto
juan.nombre;  // "Juan"
juan.apellido;  // "Morales"


const arregloNumeros = {

}  // object

console.log(juan);
console.log(arregloNumeros);


