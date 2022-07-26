class Persona{
    
    static contadorPersona = 0; // Atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log("SE HAN SUPERADO EL MAXIMO DE OBJETOS PERMITIDOS");
        }
        

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
    
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludo desde el metodo static");
    }

    static saludar2(persona){
        // se ejecuta desde la clase pero no desde los objetos
        console.log("Saludo con static tomando un objeto como parametro: "+persona.nombreCompleto());
    }
}

class Empleado extends Persona{

    constructor(nombre, apellido, departamento){
        
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado.toString());

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());

let persona3 = new Persona("Petro", "Presidente");
console.log(persona3.toString());

let empleado2 = new Empleado("Napoleon", "Perrea", "Militar");
console.log(empleado2.toString());

let persona4 = new Persona("Alvarito", "Uribe");
console.log(persona4.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);