// El paso por valor es cuando usamos tipos que no son de referencia
// COmo los booleanos numericos etc


// valor tipo primitivo ya que no tiene valores ni metodos definidos
let x = 10;

function cambiarValor(a) {
    a = 20;
    
    // return se argrega de manera implicita
}
// paso por valor
// La variable x unicamente paso una copia de su valor
cambiarValor(x);
console.log(x);
// la variable ( a ) al terminar la funcion se destruye
console.log(a);


//paso por referencia

const persona = {
    nombre: "Juanito",
    apellido: "Perez"
}
// Acede a la referencia del objeto
function cambiarValorObjeto(p1){
    // Atraves del p1 se puede acceder a sus atributos y modificar su valor
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}
// paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
