// objetos literales
let profesor1={
    nombre: "esteban",
    apellido:"piazza",
    rol: 'docente',
    edad: 29,
    enactividad: true
    //par clave: valor
}
console.log(profesor1)
//si quisiera pedirle solo un objeto:
console.log(profesor1.nombre) //se ve un objeto abajo del otro con sus propiedades
let usuarioinstagram={
    id:"", //campo clave unico que identifica a ese usuario
    mail:"", 
    telefono:"",
    usuario:"",
    contra:"", 
    nombre:"",
    apellido:"",
    fechadenacimiento:"",
    cantidaddefotos:"",
    usuariosquesigue:"",
    usuariosseguidores:"",
}
usuariolinkedin={
    id:"",
    nombre:"",
    apellido:"",
    experienciaprofesional:"",
    formacionacademica:"",
}
console.table(profesor1)
//muestra los objetos en forma de tabla


/*ARRAYS
Lo puedo crear de distintas maneras:
El nombre de la raiz va todo en mayuscula
Empiezan en 0 igual que las listas.
El ultimo indicie va a ser la cantidad de elementos -1
*/
const NOMBRES =["Esteban", "Abril", "Valentina"]
console.log(NOMBRES)
console.log(NOMBRES[1])
console.log(NOMBRES[0])

const CARRITO =[]
console.log(CARRITO)
CARRITO.push("Hola") //Le estoy agregando elementos con push
console.log(CARRITO)
//No se le puede modificar un valor a una variable constante
CARRITO.push("chau")
console.log(CARRITO)
//Los elementos que voy agreganbdo a la lista se van agregando a lo ultimo
//Me va a printear con carrito: ['Hola' 'Chau]
CARRITO.pop()//Elimina un elemento
console.log(CARRITO)//se va a imprimir pero sin el ultimo elemento 
//Last in-first out
CARRITO.unshift("Unshift")//Me agrega elementos al principio
console.log(CARRITO)
CARRITO.shift()//Elimina el primer elemento
console.log(CARRITO)//First in-first out
console.log(CARRITO.lenght)
const ARRAYDEVARIASCOSAS = ["Esteban", 29, True]
console.log(ARRAYDEVARIASCOSAS)

const indices=[0, 1, 2]
const NOMBREUSUARIOS =["asd", "dsa", "wasd"]
const APELLIDOUSUARIOS=["Lombardo", "Lopez", "Gutierrez"]

/*METODOS DE ARRAYS:
freecodecamp
splice me permite eliminar un elemento existente, agregar uno:
months.splice(1, 2, 'Feb') A partir del 1 borra dos elementos y agrega feb

El slice corta el array para pasarmelo a uno nuevo.
nombres=['Rita', 'Pedro', 'Manuel', 'Ana', 'Vanesa']
masculinos=nombres.slice (1,3);
masculinos contiene ['Pedro', 'manuel']
*/
console.log(APELLIDOUSUARIOS.indexOf("Piazza"))//Me devuelve un -1 (no existe este apellido)
console.log(APELLIDOUSUARIOS.includes("Perez"))// Me devuelve true or false
console.log(Indices.lenght>2)//Es el largo de indice mayor a 2?
//reverse: te devuelve el array invertido
//array.reverse()
let ultimoValor=NOMBREUSUARIOS.pop()
console.log(ultimmoValor)
//join: une todos los elementos de una red con un string y me los devuelve en string
//console.log(elements.join(''))
//puedo pedirle que los separe con , o con -, o con or.
//Me devuelve una cadena separada por lo que yo le pide
//Slice: devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin
//Si quiero puedo guardar la cadena de caracteres creada por join en una variable
const EQUIPOS=["Boquita", "Riber", "Boquita"]
console.log(EQUIPOS.indexOf("Boke"))
console.log(EQUIPOS.lastIndexOf("BOKE"))
//te muestra el ultimo
/*ELEMENTOS VISTOS:
push-pop
shift-unshift
splice-slice
join
indexOf-lastIndexOf-Includes
*/
let nombre="Abril"
console.log(nombre[0])
//Puedo acceder letra por letra de esta manera. En este caso me imprime ("A")



