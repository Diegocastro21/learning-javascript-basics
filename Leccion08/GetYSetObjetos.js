let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    // anteponiendo get no necesitamos poner () al momento de llamar
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

// con poner el nombre de la funcion podemos acceder a la funcion
console.log(persona.nombreCompleto);

// acceder a la propiedad idioma en MAYUSCULAS
console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);
