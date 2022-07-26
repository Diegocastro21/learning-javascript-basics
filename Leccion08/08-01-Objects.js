let x = 10;

// Se crea un objeto en memoria con todas sus propiedades
// Y mediante la refrencia podemos acceder a sus propiedades
let persona ={
    nombre: "Juanito",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28, 
    // Agregar metodos a un objeto
    nombreCompleto: function(){
        // Uso de la palabra reservada this que apunta al objeto
        // que se esta inicializando en las propiedades del objeto
        return this.nombre + " " + this.apellido;
    },
    
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
console.log(persona.nombreCompleto());


// Crear objeto pero con la palabra reservada new

// se crea el espacio en memoria vacio pero todavia no tiene propiedades
let persona2 = new Object();
// se le agrega las propiedades por medio de la referencia del objeto
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "31087236423";

// Formas de acceder alos atributos de un objeto
console.log(persona.nombre);

console.log(persona['apellido']);

// Ciclo for in
for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Como agregar y eliminar propiedades a un objeto

// Agrego dinamico de la propiedad tel
persona.tel = "310993432";
console.log(persona);

// Eliminar una propiedad de un objeto
// Borrando asi tanto la propiedad como el valor asociado
delete persona.tel;

console.log(persona);

// Formas distintas de imprimir un objeto

// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", "+ persona.apellido);

// Mediante for in
for (const nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

// Mediante el metodo value que lo pasa por array
let personaArray = Object.values(persona);
console.log(personaArray);

// Mediante una cadena de JSON

let personaString = JSON.stringify(persona);
console.log(personaString);