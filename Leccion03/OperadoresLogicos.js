// OPerador logico AND ( && )
let a = 5;
let valMin = 0, valMax = 10;

// Para que regrese true ambas expresiones deben ser verdaderas
// Y si cualquiera de las dos no se cumplen entoces manda false
if (a >= valMin && a <= valMax) {
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
}

// Operador logico OR  ( || )
// Regresa true si cualquiera de ellos regresa true de lo contrario false
let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("El Padre puede asistir al juego del hijo");

}else{
    console.log("El padre esta ocupado");
}