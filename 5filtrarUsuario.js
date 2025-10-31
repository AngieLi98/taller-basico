const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Maria", edad: 12 },
    { nombre: "Flor", edad: 21 },
    { nombre: "Sol", edad: 17 }
]

function filtrarUsuarios(usuarios, edadMinima){
    let filtrar = usuarios.filter(item => item.edad >= edadMinima)
    return filtrar 
}


console.log(filtrarUsuarios(usuarios, 18));
