// pegar elementos
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");

// evento click
botao.addEventListener("click", function () {

  // muda o texto
  texto.innerHTML = "Agora mudou depois do clique!";

  // muda estilo da caixa
  caixa.style.backgroundColor = "#c7d2fe";
  caixa.style.border = "2px solid #6366f1";

  // muda cor do título
  titulo.style.color = "#4f46e5";

});