// 6am - 11am = Buenos Dias
// 12pm - 18pm = Buenas Tardes
// 19pm - 24pm = Buenas Noches
// 0am - 6am = Durmiendo


let hora = 11;

if ( hora == 6 || hora == 7 || hora == 8 || hora == 9 || hora == 10 || hora == 11) {
    console.log("Buenos Dias");
}else if(hora == 12 || hora == 13 || hora == 14 || hora == 15 || hora == 16 || hora == 17 || hora == 18){
    console.log("Buenas Tardes");
}else if(hora == 19 || hora == 20 || hora == 21 || hora == 22 || hora == 23 || hora == 24){
    console.log("Buenas Noches");
}else if(hora == 0 || hora == 1 || hora == 2 || hora ==3 || hora == 4 || hora == 5 || hora == 6){
    console.log("Durmiendo");
}


// Solucion Simple

let horaDia = 12;
if ( horaDia >= 6 && horaDia <= 11) {
    console.log("Buenos Dias");
}else if(horaDia >=12 && horaDia <= 18){
    console.log("Buenas Tardes");
}else if(horaDia >= 19 && horaDia <=24){
    console.log("Buenas Noches");
}else if(horaDia >= 0 && horaDia <=6){
    console.log("Durmiendo");
}