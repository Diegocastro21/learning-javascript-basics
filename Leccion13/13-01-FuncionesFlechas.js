// Manera clasica de trabajar con funciones
function miFuncion(){
    console.log("Saludos desde  mi funcion");
}
// es una funcion anonima pero se guarda en una variable
let miFuncionsita = function(){
    console.log("Saludos desde mi funcion anonima");
}
// Funcion flecha
// solo se usa los argumentos y el cuerpo de la funcion
// mediante el operador flecha => 
// aca en la funcion flecha no se aplica el concepto de hoisting
// llamar la funcion antes de haberla definido o declarado.
// podemos trabajar con const y let
const miFuncionFlecha = () => {
    console.log("saludos desde mi funcion flecha");
}

miFuncion();
miFuncionsita();
miFuncionFlecha();