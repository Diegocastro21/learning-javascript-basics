let a = 3, b = 2, c = 1, d = 4;

// Las ecuaciones se realizan de izq a der
let z = a * b + c;
console.log(z);


// El operador de multiplicacion toma mas prioridad que la suma
// Aunque se evalue de izq a der toma como prioridad la multiplicacion
z = c + a * b;
console.log(z);


// La Tabla de Preferencias
// Level 15: ()  []  .  new  
// Level 14:  ++  --  +  -  !  ~ delete  typeof  void
// Level 13: *  /  %
// Level 12: + -
// Level 11: >>  <<
// Level 10: <  <=  >  >=
// Level 9: ==  !=  === !==

// IZQ a DER
z = a * b + c / d;
console.log(z);
z = c + a * b / d;
console.log(z);


// Si ponemos parentesis se toma mas prioridad ya que esta
// es el Level 15 de prioridad
z = (c + a) * b / c;
console.log(z);