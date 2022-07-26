// NO es posible declarar objetos antes de declara la clase
// NO se aplica en concepto de hoisting
class Persona{
    // Si no se define un constructor Javascript proporciona
    // uno vacio
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Metodo Getter
    get nombre(){
        return this._nombre;
    }

    // Metodo Setter
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan", "Perez");
persona1.nombre = "Juan Carlos";
// Accediendo al get del nombre
console.log(persona1.nombre);

// El concepto de hoisting no se aplica para las clases
// tenemos que declararlas primero antes de utlizarlas.
