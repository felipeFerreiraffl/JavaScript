var formula = '';
var numero = '';
var numeros = [];
var operadores = [];

function printa(dado) {
  formula += dado;
  document.getElementById('formula').innerText = formula;
}

function calcula() {

}

function apaga() {
  formula = formula.substring(0, formula.length - 1);
  document.getElementById('formula').innerText = formula;
}