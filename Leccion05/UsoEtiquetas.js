inicio:
for (let contador = 0; contador <= 10; contador++) {
    if(contador % 2 !== 0){
        // break inicio;  rompe el ciclo que se encuentra dentro
        // de la etiqueta 

        continue inicio; // Estoy pidiendo que itere el ciclo que esta despues
        // de la etiqueta
    }
    
    console.log(contador);
    
    
}