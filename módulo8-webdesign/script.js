// seleção de elementos
const texto = document.getElementById("texto");
const caixa = document.getElementById("caixa");
const titulo = document.querySelector("#titulo");

const btnTexto = document.querySelector("#btnTexto");
const btnCor = document.querySelector("#btnCor");
const btnReset = document.querySelector("#btnReset");


// função para mudar texto
function mudarTexto() {
  texto.innerHTML = "O texto foi mudado com uma função!";
}


// função para mudar cor
function mudarCor() {
  caixa.style.backgroundColor = "#ffcbe9";
  caixa.style.border = "2px solid #0cffeb";
  titulo.style.color = "#5a1fff";
}


// função para resetar tudo
function resetar() {
  texto.innerHTML = "Clique nos botões para mudar coisas na página";
  caixa.style.backgroundColor = "#e5e7eb";
  caixa.style.border = "none";
  titulo.style.color = "black";
}


// eventos de clique
btnTexto.addEventListener("click", mudarTexto);
btnCor.addEventListener("click", mudarCor);
btnReset.addEventListener("click", resetar);