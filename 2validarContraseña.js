function validarContraseña(contraseña){
    let tiene8Caracteres = false;
    let tieneNumero = false;
    let tieneMayuscula = false;

    if (contraseña.length >= 8){
        tiene8Caracteres = true;
    }

    for (let i = 0; i < contraseña.length; i++) {
        let caracteres = contraseña[i]

        if(caracteres >= "0" &&  caracteres <= "9"){
            tieneNumero = true;
        }

        if(caracteres >= "A" && caracteres <= "Z")
            tieneMayuscula = true;
    }

    if (tiene8Caracteres && tieneNumero && tieneMayuscula) {
        return true
    } else {
        return false
    }
}

console.log(validarContraseña("Ciruela89"));
