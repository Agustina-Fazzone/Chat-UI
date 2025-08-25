//datos primitivos -> unidades singulares de informacion
//son inmutables ->no se pueden modificar

//number
const age = 31
//string
const name = "Agustina"
//boolean (V o F)
const isAdult = true


//datos complejos/compuestos ->estructura de datos
//son mutables ->se pueden modificar

//un array sirve para listar elementos
//objeto sirve para describir un elemento

const listOfContacts = ["Luciano", "Ana", "Federico"] //array
const contactOne = {} //objet

//push es para agregar
listOfContacts.push("jhoanna")

//objeto sirve para describir un elemento
//un objeto tiene propiedades y métodos (funciones)

//propiedad -> clave y valor
const contact = {
  name: "Agustina",
  state: true,
  lastConnection: "left 7 mins ago",
  greet: function () {
    console.log("Hola!")
  }
}

const cart = ["PC", "Tablet", "Pencil", "Phone"]

const products = [""]

//-------------------------------------

//una lista es una escructura de datos que me va a permitir ordenar información

//Lista de objetos 
const contacts = [
  { name: "Vicent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Colman", status: "offline", lastConnection: "7 mins ago" },
];
//si yo digo que una lista me va a ordenar la información,lo que quiere decir es que cada objeto va a tener un índice.
//el ÍNDICE hace referencia a que pocición ocupa dentro de un array.
//por ende yo puedo aplicar un BUCLE
//Bucle ->algo que se repite

//Callback -> una función que se ejecuta despues de que pasa algo.
//el CALLBACK se ejecuta en cada iteración

contacts.forEach(function (contact) {
  console.log("Hola")
})

//1- voy a ejecutar un bucle tantas veces como elementos haya en el array contacts
//2- en cada elemento ejecutaré un console.log que dice "Hola".

//EL ARRAY SIEMPRE TENDRÁ UN NOMBRE EN PLURAL Y EL ELEMENTO QUE ITERA EN SINGULAR
contacts.forEach(function (contact) {
  console.log("Vuelta nueva")
  console.log(contact.name)
})

//entre los parentesis () voy a tener la informacion de cada iteracion.oscea que va a ser el nombre que adquiere cada elemento.oscea que cada iteracion va a ser (contact)





