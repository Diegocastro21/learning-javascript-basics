let a = 3, b= 2, c = "3";

// Operador de igual igual
// Se revisa el valor sin importar el tipo de variable
// si la cadena tiene el numero igual este muestra true
let z = a == b;
console.log(z);

// Revisa los valores pero tambien los tipos
// Si el valor es igual pero en una cadena este sera falso 
// ya que no tienen elmismo tipo
z = a === c;
console.log(z);

// para saber si el operador es distinto se usa !
z = a != c;
console.log(z);

// para el caso estricto que revisa tipos y valores
// se usa !==
z = a !== c;
console.log(z);