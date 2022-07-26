var nombre = 'Juan';
var apellido = 'Perez';

//concatenacion de cadenas estamos uniendo los dos valores
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Diego' + ' '+ 'Castro';
console.log(nombreCompleto2);

//concatenacion de cadena con un numero
// tratando asi el numero como caddena
// las expresiones en javascript se tratan de der a izq
var xx = nombre + 219;
console.log(xx);

// hacer que nos valores se sumaran en un concatenacion

xx = nombre + (2+4);
console.log(xx);

// si se encuentras numero primeros que un string
// se realiza la operacion tratandolos como numeros
// luego los trata como un string
xx = 2 + 4 + nombre;
console.log(xx);