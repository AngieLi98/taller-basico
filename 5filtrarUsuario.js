const usuario = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Maria", edad: 12 },
    { nombre: "Flor", edad: 21 },
    { nombre: "Sol", edad: 17 }
]


function filtrarUsuarios(usuarios, edadMinima){
    let edad = usuario.filter(item => item.edad >= 18)
    
}