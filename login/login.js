const campoSenha = document.getElementById("senha")
const btnSenha = document.querySelector("#mostrar-senha")
btnSenha.addEventListener("click", function()){
    if(campoSenha.type == "password"){
        campoSenha.type = "text";
    }
    else{
        campoSenha.type = campoSenha.type == "password" ? "text" : "password";
    }
}