

// Una funcion es basicamente un codigo reutilizable
// Y que lo podemos llamar tantas veces como lo necesitemos

// hoisting llamado antes de declarar la funcion
miFuncion(4, 2);

// Para crear una funcion usamos la palabra reservada function
// Y se usa la manera de camello para la definicion de nombres de funcs
// Uso de args y pueden tener o no.
function miFuncion(a, b){
    //Cuerpo de la funcion

    console.log("Suma: "+ (a + b));
}



// Podemos llamar a la funcion antes  o despues de definirla
// Llamando a la funcion
miFuncion(2, 3);
