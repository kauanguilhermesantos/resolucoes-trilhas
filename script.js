let texto = "Descubra o mundo da programação aqui!";
let atraso = 100;
let textoElemento = document.querySelector(".tituloHome");

let contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
