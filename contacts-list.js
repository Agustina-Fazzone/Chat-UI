const $contactsList = document.querySelector(".contact-list")
const $searchInput = document.querySelector(".search")

const contacts = [
  { name: "Vicent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Colman", status: "offline", lastConnection: "7 mins ago" },
  { name: "Edu Bayon", status: "online", lastConnection: "now" },
];
function renderContacs(listOfContacts) {
  $contactsList.innerHTML = ""

  listOfContacts.forEach(function (contact) {

    $contactsList.innerHTML += `
  <li class="contact">
   <img src="avatar.jpeg" alt="imagen de perfil">
  <div>
   <h4>${contact.name}</h4>
   <p class="${contact.status === "offline" ? "status" : "status-inline"}">${contact.lastConnection}</p>
  </div>
  </li>`
  })
}

renderContacs(contacts)

$searchInput.addEventListener("input", searchContacts)

function searchContacts() {
  const inputValue = $searchInput.value.toLowerCase()

  const filteredContacts = []


  contacts.forEach(function (contact) {
    const contactNameToLowerCase = contact.name.toLocaleLowerCase()
    if (contactNameToLowerCase.includes(inputValue)) {
      filteredContacts.push(contact)

    }
  })

  renderContacs(filteredContacts)
}