const $inputMessage = document.querySelector('input[type="text"]')
const $sendButton = document.querySelector('button[title="Enviar"]')
const $chatMenssages = document.querySelector(".chat-messages")


$sendButton.addEventListener("click", sendMenssage)



function sendMenssage() {
  const message = $inputMessage.value

  $chatMenssages.innerHTML += `
  <div class="menssage sent">
   <p>${message}</p>
   <p class="timesstamp">${new Date().toLocaleTimeString()}</p>
  <div>
  `

  $inputMessage.value = ""

  //asíncrono
  setTimeout(function () {
    $chatMenssages.innerHTML += `
    <div class="message received">
     <p>Mensaje recibido! ✅</p>
     <p class="timesstamp">${new Date().toLocaleTimeString()}</p>
  <div>
  `

  }, 5000)
}