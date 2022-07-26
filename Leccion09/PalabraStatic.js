class Persona{
    

    // definir atributo static
    static contadorObjetosPersona = 0; // Atributo de nuestra clase

    email = "Valor default email"; // Atributo de nuestros objetos



    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador persona: "+Persona.contadorObjetosPersona);
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
        return this._nombre + " " + this._apellido;
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
console.log(persona1);

let empleado = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado);
console.log(empleado.nombre);

console.log(empleado.toString());


// persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado);


console.log(Persona.contadorObjetosPersona);
// las clases hijas heredan tambien los atributos static
console.log(Empleado.contadorObjetosPersona);

//atributos No estaticos se asocian con los objetos
// Y se peude heredar
console.log(persona1.email);