// La clase object es la clase padre de todas las clases
// En JavaScript

// La palabra prototype nos permite agregar metodos
// dinamicamente
class Persona{
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

    // Metodo Setter
    set apellido(apellido){
        this._apellido = apellido;
    }
    // dentro de una clase nno es necesario
    // especificar la palabra function
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    //Sobrescribiendo el metodo de la clase padre (Object)
    toString(){
        // Se aplica polimorfismo (Multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es de una referencia de 
        // tipo padre o referencia de tipoo hijo.
        return this.nombreCompleto();
    }
}


class Empleado extends Persona{

    // Cuando creamos un una clase hija debemos
    // Inicializar los atributos de clase padre
    constructor(nombre, apellido, departamento){
        // palabra reservada super para los atriubutos de 
        // la clase padre
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // sobrescritura para modificar el comportamiento
    // predefinido en la clase padre
    nombreCompleto(){
        // usamos super para no tener que escribir denuevo lo ya escrito
        // en el metodo anteriormente de ser modificado con la palabra super
        //return this._nombre + " " + this._apellido + ", " + this._departamento;

        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
// Aplicamos polimorfismo ya que usamos el comportamiento
// dependiendo del objeto que estamos utilizando
// puede ser el objeto de la clase padre o el de la hija 
// su comportamiento seria diferente
let empleado = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado);
console.log(empleado.nombre);

console.log(empleado.toString());



