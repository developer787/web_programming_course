// Las variables se declaran de la siguiente
// manera. Usando el keyword o palabra
// reservada "const" seguido por un nombre. 
const nombre = 'Juan'
const apellido = 'Panama'

// "let" tambien es un keyword que se usa 
// para declarar variables. Mas adelante 
// explicaremos las diferencias entre "const"
// y "let".
let edad = 35

// Aqui un listado de keywords,tambien
// conocidos como palabras reservadas:

// break, case, catch, continue, 
// default, delete, do, else, finally, 
// for, function, if, in, instanceof,
// new, return, switch, this, throw, try, 
// typeof, var, void, while, with.

// A las variables se les puede asignar 
// cualquier tipo de data. Usamos el operador
// matematico de igualdad "=" para asignar
// valores a las variables.
const vivo = true
const estatus_civil = "soltero"
const amigos = ["Miguel","Raul","Laura"]

// Aqui le estamos asignando a la variable
// llamada humano data del tipo "object".
const humano = {}

console.log(typeof humano) // "object"
console.log(typeof nombre) // "string"
console.log(typeof edad)   // "number"
console.log(typeof vivo)   // "boolean"

// El "object" es un tipo de data.
// Existen varios tipos de data:
//   > boolean
//   > null
//   > undefined
//   > string
//   > number
//   > symbol
//   > object
humano.name = nombre
humano.age = edad
const hello = (person)=> 'Hola ' + person

// Aqui podemos ver el resultado 
// en la consola
console.log(hello(humano.name))
