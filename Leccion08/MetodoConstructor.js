// Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juanito", "Perez", "jperez@gmail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Karla", "Laza", "klaza@gmail.com");
console.log(madre.nombreCompleto());

// Los cambios que efectuemos solo afectaran a su referencia explicitada
padre.nombre = "Carlos";
console.log(padre);


let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String(" Hola ");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};