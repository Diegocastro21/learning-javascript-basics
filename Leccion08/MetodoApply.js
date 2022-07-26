let persona1 = {
    nombre: "Juanito",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        //return this.nombre + " " + this.apellido;
        return titulo +": "+this.nombre + " " + this.apellido+ ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(persona1.nombreCompleto("Lic", "453254124"));

// cuando utlizamos apply mandamos todos los argumentos mediante un arreglo
let arreglo = ["Ing", "312412312"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));