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

function determinarTipo(tipo){
    // se aplica el concepto de polimorfismo
    // un metodo puede tener el comportamiento de 
    // tanto la clase padre como la clase hija
    console.log(tipo.obtenerDetalles());
    

    // SI preguntamos de si es instanceof de clase empleado
    // al momento de preguntar en la clase hija este es true
    // debido a la relacion clase padre-hija
    // if (tipo instanceof Empleado) {
    //     console.log("Es un objeto de tipo Empleado");
    // }

    // solo responde a su clase o clase padre
    // pero no a su clase hija

    // en este caso no responde que si a tipos hijos
    // Por lo que se debe poner primero a las clases de menor jerarquia
    // if (tipo instanceof Gerente) {
    //     console.log("Es un objeto de tipo Gerente");
    // }


    // usando if y elseif este solo responde al su tipo
    // programando que aunque sea verdadero el de tipo de clase padre
    // este solo use el de su menor jerarquia.
    if (tipo instanceof Gerente) {
        console.log("Es de tipo  Gerente");
    }
    else if (tipo instanceof Empleado) {
        console.log("Es de tipo  Empleado");
    }
    else if (tipo instanceof Object) {
        console.log("Es un tipo Object");
    }
}

let empleado1 = new Empleado("Juan", 3000);


let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);
