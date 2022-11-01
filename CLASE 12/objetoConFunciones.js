let producto={
    id:"1",
    nombre: "chipa",
    precioporcuarto:800,
    incluirIva: function (){
        return this.precioPorCuarto*1.21
    }
}

console.log(producto.incluirIva())
//Si quiero crear un objeto como la calculadora, me conviene crear solo el objeto y despues agregar directamente las funciones en base a eso.
