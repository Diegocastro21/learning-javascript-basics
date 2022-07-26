"use strict";
let resultado = 5;

// arrojar nuestros propios errores

try {
    //x = 10;
    if (isNaN(resultado))throw "No es un numero" ;
    else if(resultado === " ") throw "Es cadena Vacia";
    else if( resultado >= 0)throw "Valor positivo";
    else if(resultado < 0)throw "Valor negativo";

} catch (error) {
    console.log(error);
    // podemos arrojar el error en varias partes.
    // si nosotros la estamos generando solo se manda el mensaje
    // pero si es causada este si manda su name y message.
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('Termina revision de errores');
}