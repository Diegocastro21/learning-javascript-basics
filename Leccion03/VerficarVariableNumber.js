// NaN = Not a Number;
let miNumero = "18x";


let edad = Number(miNumero);
// Al tener caracteres no se puede convertir a Number
// Y Lanza NaN
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un numero");
}else{
    if (edad >= 18) {
        console.log("Puede Votar");
    } else {
        console.log("Muy Joven Para Votar");
    }
}

// resolviendo ejercicio con operador ternario

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    let resultado = edad >=18 ? "Puede Votar" : "Muy Joven Para Votar";
    console.log( resultado );
}
