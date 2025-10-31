function convertirMoneda(monto, monedaDestino){
    if (monedaDestino === "USD") {
        let pesoUSD = 0.00026;
        let resultado = monto * pesoUSD;
        return resultado
    } else {
        let pesoEUR = 0.00022;
        let respuesta = monto * pesoEUR
        return respuesta
    }
}

console.log(convertirMoneda(12000, "USD"));
