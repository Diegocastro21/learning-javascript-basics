class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }

}

function imprimir(tipo){
    // se aplica el concepto de polimorfismo
    // un metodo puede tener el comportamiento de 
    // tanto la clase padre como la clase hija
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado("Juan", 3000);


let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

imprimir(empleado1);
imprimir(gerente1);
