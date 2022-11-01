
saludar()
function saludar(){
    console.log("hola")
}
//Java primero recorre todo el codigo y despues vuelve a recorrerlo todo y lo invoca
//Con esta funcion me lo va a imprimir de todos modos

saludarFlecha()
let saludarFlecha=()=>console.log("hola en flecha")
//No se puede acceder antes como con las funciones.
//En este caso no me lo va a imprimir como el anterior caso

let sumarEnFlecha=(a,b)=>{
    let c= a+b
    return c
}

let restar=(a,b)=>a-b
console.log(restar(10,5))

