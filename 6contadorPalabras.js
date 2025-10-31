function contarPalabras(texto){
    palabras = texto.split(" ").filter(letra => letra !== " ");
    return palabras.length;
}

console.log(contarPalabras("aprendiendo a programar JavaScript"));
