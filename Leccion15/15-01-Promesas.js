// Esta promise va tener parametros del tipo funcion callback
// una en caseo resolved .then()
// y otra en caso rejected .catch()
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if (expresion) {
        // pasa la informacion de resolver al primero argumento
        resolver("Resolvio correcto");
    } else {
        // pasa la informacion de rechazar al segundo argumento
        rechazar("Se produjo un error");
    }
});

// metodo .then()
// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// metodo .catch()
// es otra forma de ejcutar la promesa
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));