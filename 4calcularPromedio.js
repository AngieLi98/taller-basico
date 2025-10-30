function calcularPromedio(notas){
    let suma = notas.reduce((acumulador, numero) => acumulador + numero, 0)
    let promedio = suma / notas.length 
    return promedio
}

console.log(calcularPromedio([4, 5, 8, 3, 9, 7]));
