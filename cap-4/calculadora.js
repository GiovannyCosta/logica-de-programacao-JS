const prompt = require("prompt-sync")();

console.log("=== CALCULADORA NODE.JS ===");

// 1. Entrada de Dados
const num1 = Number(prompt("1º Número: "));
const operador = prompt("Operação (+, -, *, /): ");
const num2 = Number(prompt("2º Número: "));

let resultado;
// boleano
let erro = false; // Flag para controlar se houve erro

// 2. Processamento (Switch Case)
switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;

  case "-":
    resultado = num1 - num2;
    break;

  case "*":
    resultado = num1 * num2;
    break;

  case "/":
    // Validação: Não existe divisão por zero!
    if (num2 === 0) {
      console.log("Erro: Não é possível dividir por zero.");
      erro = true;
    } else {
      resultado = num1 / num2;
    }
    break;

  default:
    console.log(`Erro: O operador '${operador}' não é válido.`);
    erro = true;
}

// 3. Saída de Dados (Só mostra se não houve erro)
if (!erro) {
  // .toFixed(2) ajuda a formatar dízimas (ex: 10 / 3 = 3.33)
  // O uso de Number.isInteger verifica se precisa de casas decimais
  if (Number.isInteger(resultado)) {
    console.log(`Resultado: ${resultado}`);
  } else {
    console.log(`Resultado: ${resultado.toFixed(2)}`);
  }
}
