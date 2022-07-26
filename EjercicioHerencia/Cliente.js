class Cliente extends Persona{
    
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecha){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
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
        super.toString() + " " + this._idCliente + " " + this._fechaRegistro ;
    }
    
}