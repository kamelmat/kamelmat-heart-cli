/* Skip to content
 
Search Gists
Search...
All gists
Back to GitHub
@gonzalezvarn
gonzalezvar/gist:fb9686a504b809f6f5b837eefe1c7517 Secret
Created 1 minute ago • Report abuse
Code
Revisions
1
Clone this repository at &lt;script src=&quot;https://gist.github.com/gonzalezvar/fb9686a504b809f6f5b837eefe1c7517.js&quot;&gt;&lt;/script&gt;
<script src="https://gist.github.com/gonzalezvar/fb9686a504b809f6f5b837eefe1c7517.js"></script>
gistfile1.txt */
/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]


const animateByChart = (ms) => {
    let totalDelay = 0;
    asciiHeart.forEach((line, index) => {
        line.split("").forEach((char, indexChar) => {
            totalDelay += (ms + index) * indexChar
            setTimeout(() => {
                process.stdout.write(char)
                if (indexChar == line.length - 1) {
                    console.log("")
                }
            }, totalDelay);
        })
    })
}
const animateByLine = (ms) => {
    asciiHeart.forEach((item, index)=>{
        setTimeout(() => {
            console.log(item)
        }, ms * index);
    })
}


animateByChart(10)
// animateByLine(100)



const animateWave = (ms) => {
    for (let i = 0; i < 10; i++) { // La ola se moverá 10 veces
        setTimeout(() => {
            console.log(" ".repeat(i) + "~"); // Espacios + ola
        }, i * ms); // Retraso progresivo
    }
};

// animateWave(200); // Llama a la función con 200ms de delay




