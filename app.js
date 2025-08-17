const inputMessage = document.querySelector('input[type="text"]')
const sendButton = document.querySelector('button[title="Enviar"]')
const chatMenssages = document.querySelector(".chat-messages")

// invocación de función
sendButton.addEventListener("click", sendMenssage)

// declaración de función
// palabra reservada -> function✅
// nombre de la funión -> siempre debe ser un verbo-> sendMenssages ✅
// parentesis -> parametros -> herramientas internas para la función
// llaves -> scope -> zona privada de la función

function sendMenssage() {
  const message = inputMessage.value

  const containerMessage = document.createElement("div")
  containerMessage.classList.add("menssage", "sent")

  const text = document.createElement("p")
  text.textContent = message

  containerMessage.appendChild(text)

  //creando el timestamp
  const timestamp = document.createElement("p")
  timestamp.classList.add("timesstamp")
  timestamp.textContent = new Date().toLocaleTimeString()

  containerMessage.appendChild(timestamp)

  chatMenssages.appendChild(containerMessage)

  inputMessage.value = ""

  //asíncrono
  setTimeout(function () {
    const containerMessage = document.createElement("div")
    containerMessage.classList.add("message", "received")

    const response = document.createElement("p")
    response.textContent = `Recibido ${message} ✅`

    containerMessage.appendChild(response)

    chatMenssages.appendChild(containerMessage)


  }, 5000)



}