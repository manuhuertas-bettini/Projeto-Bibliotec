const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const statusRetirada = document.querySelectorAll(".status");
checkboxes.forEach((caixinha, indice, lista)=>{
     caixinha.addEventListener("change", () => {
        if(caixinha.checked == true){
            statusRetirada[indice].classList.remove("aguardando")
            statusRetirada[indice].classList.add("retirado")
            statusRetirada[indice].textContent = "Retirado"
        }else{
            statusRetirada[indice].classList.remove("retirado")
            statusRetirada[indice].classList.add("aguardando")
            statusRetirada[indice].textContent = "Aguardando retirada"
        }
    })
})