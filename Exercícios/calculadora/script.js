var formula = '';
var numero = '';
var numeros = [];
var operadores = [];

function printa(dado) {
  if (dado == '+' || dado == '-' || dado == 'x' || dado == '/' || dado == 'e') {
    numeros.push(Number(numeros));
    operadores.push(dado);
    numero = '';
  } else {
    formula += dado;
    numero += dado;  
  }

  document.getElementById('formula').innerText = formula;
}

function calcula() {
  printa('e');

  let resultado;
  for (let i = 0; i < numeros.length; i++) {
    switch(operadores[i]) {
      case '+':
        resultado = numeros[i] + numeros[i + i];
        break;
        
      case '-':
        resultado = numeros[i] - numeros[i + i];
        break;

      case 'x':
        resultado = numeros[i] * numeros[i + i];
        break;
      
      case '/':
        resultado = numeros[i] / numeros[i + i];
        break;
      
      default:
        alert(`Valor não encontrado`);
        break;
    }
  }
}

function apaga() {
  formula = formula.substring(0, formula.length - 1);
  document.getElementById('formula').innerText = formula;
}