// Los parametros : las variables que definimos en la funcion se le
// conoce como parametros
// asi que se conoce como parametros a la lista de valores que va a recibir
// una funcion
// Los argumentos: asi que los argumentos son los valores que vamos a asignar a los parametros

// podemos asignar valores por default a los parametros
let sumar = function (a = 4, b = 5){

    console.log(arguments[0]);
    console.log(arguments[1]);
    
    // podemos acceder a mas argumentos aunque no lo hayamos declarado
    // solo que este se mostrara como undefined
    // pero si cuando llamamos a la funcion ingresamos otro valor
    // este sera asignado correctamente a argumento que no se habia declarado
    console.log(arguments[2]);

    return a + b + arguments[2];
};
// para mandar a llamar la funcion javascript es flexible
// y permite que tenga uno o cero argumento y pone como undefined 
// los demas que no se mandaron a asignar

resultado = sumar(3, 6, 7);
console.log(resultado);

