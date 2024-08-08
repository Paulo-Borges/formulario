const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")


// Colocando um evento no botão submit 
form.addEventListener("submit", (event) => {
 event.preventDefault()

 checkInputPasswordConfirmation()
 checkInputUsername()
 checkInputEmail()
 checkInputPassword()
})


// Validação do Usuário 
function checkInputUsername() {
 const usernameValue = username.value

 if(usernameValue === "") {
        // mostrar o aviso e com a mensagem de erro... 
        errorInput(username, "Preencha um username!")
     }else {
        // const formItem = input.parentElement 
        // formItem.classList = "form-content"
     }
}

function checkInputPassword() {
    const passwordValue = password.value

    if(passwordValue === ''){
        errorInput(password, "A senha é obrigatória!")
    }else if(passwordValue.length < 6) {
        errorInput(password, "A senha precisa ter pelo menos 6 caracteres!")
    }

}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value
    const confirmationPasswordValue = passwordConfirmation.value

    if(confirmationPasswordValue === ''){
        errorInput(passwordConfirmation, "A confirmação de senha  é obrigatória!")
    }else if(confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais!")
    }

}





function checkInputEmail() {
    const emailValue = email.value

    if(emailValue === '') {
        errorInput(email, "Preencha um email válido!")
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

   
}