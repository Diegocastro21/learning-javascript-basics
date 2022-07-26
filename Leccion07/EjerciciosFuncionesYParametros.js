// Podemos pasar dinamicamente varios argumentos
let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);
function sumarTodo() {
    
    // todo lo enviado a la funcion esta asignado
    // en el arreglo de argumentos

    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
         suma += arguments[i];
    }

    return suma;
}