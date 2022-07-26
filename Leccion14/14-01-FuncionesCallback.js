// funcion simple
function miFuncion1(){
    console.log("Funcion 1");
}
function miFuncion2(){
    console.log("Funcion 2");
}

// se ejecutan de manera secuencial
miFuncion2();
miFuncion1();


// Funciones de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

// estamos tomando como referencia una funcion
// y podemos volver a mandar a llamar cuando se necesario
function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imprimir);

// Llamadas a procesos asincronos con setTimeout
function miFuncionCallback(){
    console.log("Saludo asincrono despues  de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); // despues de 3 seg

setTimeout(function(){console.log("saludo asincrono 2")}, 4000);

//funcion setTimeout pero con funcion flecha

setTimeout( () => console.log("Saludo asincrono 3"), 1000);
