/* const animatePyramidChar = (ms) => {
    for (let i = 0; i < 10; i ++) {       
        const line = " ".repeat(10 - i) + "*".repeat(2 * i + 1);

        for (let j = 0; j < line.length; j++) {
            setTimeout(() => {
                process.stdout.write(line.charAt(j))
            },  (i * line.length + j) * ms)
        }
        
        setTimeout(() => {
            console.log();
            
        }, (i * line.length + line.length - 1));
    }
}

animatePyramidChar(100) */

const animatePyramid = (ms) => {
    for (let i = 0; i < 10; i++) {       
        const line = " ".repeat(10 - i) + "*".repeat(2 * i + 1);  // Crear la línea con los asteriscos y los espacios
        
        // Imprimir cada carácter de la línea con un retraso progresivo
        for (let j = 0; j < line.length; j++) {
            setTimeout(() => {
                process.stdout.write(line.charAt(j)); // Usar charAt() para obtener el carácter en esa posición
            }, (i * line.length + j) * ms);  // Retraso total progresivo para cada carácter
        }

        // Salto de línea después de imprimir la línea completa
        setTimeout(() => {
            console.log(); // Después de imprimir todos los caracteres de la línea, hacemos un salto de línea
        }, (i * line.length + line.length - 1) * ms);
    }
};

animatePyramid(100);  // Cambia el valor de ms para ajustar la velocidad de la animación
