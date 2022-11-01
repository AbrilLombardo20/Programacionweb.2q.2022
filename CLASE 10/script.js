console.log("Hola mundo");
console.log("Cualquier otra cosa"); //Para comentar
/* Comentario
de lineas
*/
console.log(1+1)
let nombre="Abril"
var apellido="Lombardo"
//Siempre vamos a usar let
const edad=20
//En ningun momento de mi programa esta variable va a poder cambiar, let voy a poder cambiarla
//camelCase

//si queremos que los usuarios vean algo en nuestra web usamos:
alert("Algo inteligente") //Comando de salida
let nombreusuario=prompt("Ingrese su nombre: ") //Comando de entrada
alert("Su nombre es: "+ nombreusuario)
//alert para mostrar informacion, prompt para pedirla

//Tipos de datos:
/*undefined: valor no definido
boolean: true or false
number: datos numericos
string: cadena de caracteres
bigint: dato entero muy grande
null: vacio 
naN: not a number. Hay alguno de los valores que no es numerico
truthy 
falsy: todos los valores que son tecnicamente falsos
*/
//Puedo sumar palabras, porque tambien es concatenacion, en cambio si quiero restar palabras, me va a responder NaN
// Or se coloca: ||
//Con el igual se asigna lo de la izquierda a lo de la derecha
//Los operadores son iguales a python x+=y por ejemplo, x va a ser reemplazado directamente por x+y
console.log(1+1)
console.log(1-1)
console.log(1*1)
console.log(1/1)

console.log("Abril"&&"Lombardo")
console.log("Abril"||"Lombardo")
console.log("11"+1)
console.log("12"-1)

console.log(10/5)
console.log(10%5)//me devuelve el resto
console.log(2**4)
//Operadores de igualdad (==): solo puede tener dos respuestas, verdadero o falso
console.log(1==1)
console.log(1!=1)
console.log("1"==1)//true
console.log("1"===1)//false
console.log("1"!==1)//true

let edadminima=17
console.log(++edadminima)//me va a imprimir 18. Pasaria lo mismo con el --, me imprimiria 16
//&& yy
//|| or 

prompt(" Ingrese su edad: ")
letesasarestar=prompt("Ingrese su edad ")
console.log(typeof(edadarestar))//type of me dice que tipo de dato es el que cargue 
alert("Su edad el ano pasado era de: "+ (parseInt (edadarestar) +1))//Le estoy pidiendo: convertite en un valor tipo entero con parsear
/*
EJERCICIO:
1)Pedir un numero y mostrar su doble, su mitad, el siguiente y el anterior
2)Pedir nombre y apellido y mostrar la siguiente frase: "Su nombre es (Nombre) y su apellido es: (Apellido)"
3) Pedir al usuario 2 numeros y mostrar true si el primero es mayor que el segundo y false si el segundo es mayor
4)Pedir al usuario un numero y mostrar 0 si es par y 1 si es impar
*/
