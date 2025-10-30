function calcularPropina(total, porcentaje) {
    propina = (porcentaje / 100) * total
    return total + propina
}

console.log(calcularPropina(100, 15));
