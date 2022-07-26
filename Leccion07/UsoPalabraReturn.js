function miFuncion(a, b){
    // La palabra return se usa para regresar el valor
    console.log(arguments.length);
    // la propiedad arguments solo se peude usar dentro de la funcion
    return a + b;
}

let resultado = miFuncion(2, 3);
console.log(resultado);

// Funciones de tipo expresion
// Como es una linea que se ejecuta se usa el  punto y coma al final
// Declaracion de la funcion de tipo expresion.
let x = function(a, b){return a + b};

// Llamada de funcion de tipo de expresion
resultado = x(1, 2);
console.log(resultado);

// Funciones del tipo self-Invoking
// Declaracion de una funcion anonima que se peude llamar asi misma
(function (a, b){
    console.log("Ejecutando la funcion -->" + (a + b));
})(3, 4);
//  no podemos reutilizar la funcion asi que solo se usa una vez


// Funciones como Objetos
// Una funcion tambien se peude describir como un objeto
console.log(typeof miFuncion);

// Podemos asinar una funcion como texto

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// Funciones de tipo flecha