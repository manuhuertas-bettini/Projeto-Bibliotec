const menu = document.getElementById("menu");
const navMenu = document.querySelector(".navegacao");
menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})