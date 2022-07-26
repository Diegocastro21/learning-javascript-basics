function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "44332211";

let padre = new Persona("Juanito", "Perez", "jperez@gmail.com");
padre.tel = "11223344";
console.log(padre.tel);

let madre = new Persona("Karla", "Laza", "klaza@gmail.com");
madre.tel = "66778899";
console.log(madre.tel);



