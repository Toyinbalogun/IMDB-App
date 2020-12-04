const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorEl = document.getElementById('error-msg')
form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === "" || name.value == null){
    messages.push("Name is required!")
  }

  if (password.value.length === 0 || password.value.length <= 6){
    messages.push("Passsword must be longer than 6 characters")
  }

  if (password.value === 'password'){
    messages.push("Password cannot be password")
  }

  if (messages.length > 0){
    e.preventDefault()
    errorEl.innerText = messages.join(', ')
  } 
})


