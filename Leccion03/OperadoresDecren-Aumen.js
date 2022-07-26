let a = 3, b = 2;
let z = a + b;

// Incremento
// Pre-Incremento (El operador ++ antes de la variable)
// aca la variable antes de ser utilizado su valor se incrementa
z = ++a;
console.log(a);
console.log(z);

// Post-Incremento (El operador ++ despues de la variable)
// aca en la siguiente vez que se utiliza la variable esta incrementa su valor 
z = b++;
console.log(b);
console.log(z);

// Decremento
// Pre-Decremento 
 z = --a;
 console.log(a);
 console.log(z);

 // Post-Decremento
 z = b--;
 console.log(z);
 console.log(b);