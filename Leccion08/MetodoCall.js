let persona1 = {
    nombre: "Juanito",
    apellido: "Perez",
    // paso de parametros con el metodo call
    nombreCompleto: function( titulo, tel){
        return titulo +": "+this.nombre + " " + this.apellido+ ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// Uso de call para usar el metodo de nombrecompleto de la persona 1
// con los datos de la persona 2

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2, "Ingenierio", "31412351332"));

