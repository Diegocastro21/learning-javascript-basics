// Tipo de dato string
var nombre = "Carlos";

console.log(nombre);

// Tipo de dato Numerico
var numero = 1000;
console.log(numero);

// Tipo de dato Objeto
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "31062342323"
}
console.log(objeto);


// conocer de que tipo de dato es una variable
// mediante el  [ typeof ]
var visa = "Dc COmics";
console.log(visa);

visa = 10;
//console.log(visa); salida : 10
console.log(typeof visa);


// Existen let para las variables
// y const tambien para variables


// Tipo de dato Booleano (true, false)
var bandera = true;
console.log(bandera);

// Fuction a su vez es un tipo de dato en javascript
// Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);

// Tipo de dato undefined
// es un valor que se le puede asignar a una variable
// y tambien un tipo de dato.
var x;
console.log(typeof x);
// se le pueede asignar tambien
x = undefined;

// null = ausencia de valor
var y = null;
console.log(typeof y);

// los arreglos en javascript son objetos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// Se pueden asignar cadenas vacias a las variables
// pero el tipo de dato es string
var z = '';
console.log(z);