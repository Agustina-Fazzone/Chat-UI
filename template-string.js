const $user = document.querySelector("#user-active")

console.log($user.textContent)

//$user.innerHTML = "<span>A</span>gustina  <strong>Fazzone</strong><button>Cerrar sesión</button>"

const lastname = "Fazzone"

$user.innerHTML = `<span>A</span>gustina  
<strong class='title-name' id='pepe'>${lastname}</strong>
<button>Cerrar sesión</button>`



console.log($user.textContent)