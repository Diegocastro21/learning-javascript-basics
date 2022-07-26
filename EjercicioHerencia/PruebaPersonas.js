class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._idPersona + " " + this._nombre + " " + this._apellido + " " + this._edad;
    }

}


class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + " " + this._idEmpleado +" " + this._sueldo;
    }


}

class Cliente extends Persona{
    
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fecha){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fecha;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }


    toString(){
        return super.toString() + " " + this._idCliente + " " + this._fechaRegistro ;
    }
}

// Prueba Clase Persona
let persona1 = new Persona("Juanito", "Perez", 22);
console.log(persona1.toString());

let persona2 = new Persona("Carlos", "Ramirez", 35);
console.log(persona2.toString());

let persona3 = new Persona("Petro", "Izquierdista", 57);
console.log(persona3.toString());

// Prueba Clase Empleado

let empleado1 = new Empleado("Karla", "Gomez", 25, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Laura", "QUintero", 33, 7000);
console.log(empleado2.toString());

// Prueba Clase CLiente

let cliente1 = new Cliente("Miguel", "Cervantes", 30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Maria", "Lara", 38, new Date());
console.log(cliente2.toString());
