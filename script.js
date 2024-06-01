var texto = "Descubra o mundo da programação aqui!";
var atraso = 100;
var textoElemento = document.querySelector(".tituloHome");

var contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
