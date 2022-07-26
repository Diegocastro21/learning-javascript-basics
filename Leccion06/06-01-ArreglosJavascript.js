// Los arreglos nos permiten almacenar varios datos

// Sintaxis clasica
// Es una forma antigua de declarar arreglos y ya no se recomienda.
let autos_sintAntigua = new Array("BMW", "Mercedes Benz", "Volvo");

// cuando la referencia de la variable ya no se va a modificar
// se usa const
// ya que solo vamos a modificar el contenido del arreglo
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

// Seleccionar un elemento de un arreglo

console.log(autos[2]);

// recorrer todos los elementos con un ciclo for

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
    
}

// Modificar los elementos de un arreglo
// y como agregar mas elementos a un arrreglo

// Se selecciona el indice que queremos modificar
// y su nuevo valor
autos[1] = "MercedesBenz";
console.log(autos[1]);

// Metodo push para agregar elementos
autos.push("Audi");
console.log(autos);

// Agregar un elemento por medio del length al final del arreglo
console.log(autos.length);

autos[autos.length] = "Cadillac";

console.log(autos);

// Agregar valores adelantados
// lo cual hace que el valor anterior a este quede vacio
// Pero no es recomendable, lo ideal es que tengamos todos los elementos llenos
autos[6] = "Porshe";
console.log(autos);


// Pregunta si es un tipo array 

// con el typeof nos muestra que es tipo object
console.log(typeof autos);

// Pero con la funcion isArray este confirma si estamos trabajando con un 
// Tipo Array
console.log(Array.isArray(autos));

// Tambien con la palabra reservada instanceof
console.log(autos instanceof Array);
