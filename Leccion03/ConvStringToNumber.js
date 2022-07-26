let miNumero = "10";

// console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18) {
    console.log("Puede Votar");
} else {
    console.log("Muy Joven Para Votar");
}

// Usando operador ternarion

let resultado = edad >=18 ? "Puede Votar" : "Muy Joven Para Votar";
console.log( resultado );