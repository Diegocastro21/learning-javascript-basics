"use strict";
// el modo strict debe ser especificado en la primera linea
// o al principio de una funcion
let x = 10;
// si se usa variables que no han sido declaradas
// con el modo strict no se pueden usar
console.log(x);

miFuncion();

function miFuncion(){
    "use strict"
    let y = 15;
    console.log(y);
}

