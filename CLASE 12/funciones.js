function saludar(){
    console.log("Hola")
} //Declaracion de una funcion
saludar()//Invocacion de una funcion
//Hasta que no la invoco y no le pido que la realice, no va a funcionar
function sumar(num1,num2){
    console.log(num1+num2)
}
sumar(1,2)
//BIEN HECHA:
function restar(num1,num2){
    return num1-num2
}
restar(10,5)
function mostrarPorConsola(string, dato){
    console.log(string + dato)
}

mostrarPorConsola("el resultado es:", restar(10,5))
//Si no coloco return, me va a devolver que la funcion no esta definida

//Si en otro momento necesito utilizar esta funcion, puedo hacerlo
mostrarPorConsola("el resultado es: ", restar(18,5))

//Template literales:
function multiplicar(a,b){
    return`el resultado de la multiplicacion entre: ${a} y ${b} es ${a*b} `
}
mostrarPorConsola(multiplicar(2,2))

//ARROW FUNCTIONS
let sumarFlecha=(a,b) => a+b+100; //Funcion flecha
mostrarPorConsola(sumarFlecha(1,2))
