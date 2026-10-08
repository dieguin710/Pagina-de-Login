const form = document.querySelector("#formLogin");
const userInput = document.querySelector("#user");
const passwordInput = document.querySelector("#password");
const spanData = document.querySelector("#dadosSalvos")
const button = document.querySelector("#logOut")



document.addEventListener("DOMContentLoaded", () => {
    if(spanData) {
        getDataUser()
    }
});

function getDataUser(){
    const dadosSalvosparse = JSON.parse(localStorage.getItem("@userData"));
    if(dadosSalvosparse) {

        spanData.innerHTML = dadosSalvosparse.user
        console.log(dadosSalvosparse) 
    }else {
        spanData.textContent = "Nenhum usuario logado."
    }
}
    
    
    
if(form) {
   form.addEventListener("submit", logar)
}

function logar(e){
    e.preventDefault();
    console.log(userInput.value);
    console.log(passwordInput.value);
    if(userInput.value === "" || passwordInput.value === "") {
        alert('Preencha os campos') }
        else {
            const userData = {
                user: userInput.value,
                password: passwordInput.value
            }
            
        
            localStorage.setItem("@userData", JSON.stringify(userData));

            window.location.href = "pages/storage.html";
            
        }
    }

button.addEventListener("click", botao)
function botao() {
    
    window.location.href = "../index.html"
}


    

    
    
