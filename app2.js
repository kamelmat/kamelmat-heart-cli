const invertedPyramid = (ms) => {
    for (let i = 10; i > 0; i--) {       
        setTimeout(() => {
            console.log(" ".repeat(10 - i) + "*".repeat(2 * i - 1));
        }, (10 - i) * ms); 
    }
}

invertedPyramid(100); // Llama a la función con el retraso en ms