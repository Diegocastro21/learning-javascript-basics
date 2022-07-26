"use strict";

// mediante el manejo de este error permirte
// que el flujo del programa no se termine y
// continue a la siguiente linea.
try {
    //x = 10;
    //miFuncion();

    // con throw podemos mandar nuestros propios errores
    throw "Mi Error";
} catch (error) {
    console.log(error);
}// este bloque finally siempre se va a ejecutar 
finally{
    console.log("Termina revision de errores");
}

console.log("Continuamos...");