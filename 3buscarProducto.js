const inventario = [
    { nombre: "camisa", precio: 20 },
    { nombre: "zapatos", precio: 50 },
    { nombre: "pantalon", precio: 30}
]

function buscarProducto(nombre, inventario){
    let concidencia = inventario.find(item => item.nombre === nombre);
    if (!concidencia) {
        return null
    }
    return concidencia
}

console.log(buscarProducto("pantalon", inventario));
