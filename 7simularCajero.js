function retirarDinero(saldo, monto){
    if (saldo > monto){
        saldoactual = saldo - monto
        return saldoactual
    } else {
        console.log("Fondos insuficientes");
    }
}

console.log(retirarDinero(1000, 444));
