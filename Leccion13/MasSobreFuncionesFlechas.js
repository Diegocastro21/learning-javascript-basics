let miFuncion = function(){
    console.log("Saludos desde mi funcion");
}

// si el cuerpo es una sola linea no hay necesidad de abrir el cuerpo {}
const miFuncionFlecha = () => console.log("Saludos desde mi funcion flecha");

miFuncionFlecha();


// Va a regresar una cadena
// const saludar = () => {
//     return "Saludos desde funcion flecha";
// }
// la simplificamos para no agregar el cuerpo pq es una sola linea
const saludar = () =>  "Saludos desde funcion flecha";
console.log(saludar());

// si queremos regresar un objeto

const regresaObjeto = () => ({nombre: "Juanito ", apellido: "El Objeto"});
console.log(regresaObjeto());

// para recibir parametros
const funcionConParametros = (mensaje) => console.log(mensaje);
// si es solo un parametro podemos omitir el uso de parentesis
const funcionConParametrosSinParentesis = mensaje => console.log(mensaje);

funcionConParametros("Saludos por parametros");
funcionConParametrosSinParentesis("Saludos por parametros y sin parentesis");

const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3, 5)); 