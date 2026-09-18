const livros = document.querySelectorAll(".livro");
const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");
const livrosPorPagina = 4;

let paginaAtual = 1;
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);
function  mostrarPagina(){
    console.log(botaoProxima);
    console.log(botaoAnterior);
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    const fim = inicio + livrosPorPagina;
    livros.forEach((livro, posicao) => {
        if(posicao >= inicio && posicao < fim){
            livro.style.display = "grid";
        }
        else{
            livro.style.display = "none";
        }
    })
    numeroPagina.textContent = paginaAtual;
    let ultimoLivro = fim;
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
};
botaoProxima.addEventListener("click", () => {
    if(paginaAtual < totalPaginas){
        paginaAtual++;
        mostrarPagina();
    }
})
botaoAnterior.addEventListener("click", () => {
    if(paginaAtual > 1){
        paginaAtual--;
        mostrarPagina();
    }
})
mostrarPagina();