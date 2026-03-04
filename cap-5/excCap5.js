const prompt = require("prompt-sync")();

console.log("=== EXERCÍCIOS DE FIXAÇÃO (CAP 5) ===");

// EXERCÍCIO 1: REPETIR FRUTA
// Objetivo: Receber uma fruta e um número, e exibir repetidas vezes.
// ----------------------------------------------------------
console.log("\n--- 1. Repetição de Fruta ---");
const fruta = prompt("Fruta: ");
const num = Number(prompt("Número de repetições: "));
let saida = "";

for (let i = 1; i <= num; i++) {
  // Adiciona ' * ' apenas se não for o último elemento
  if (i === num) {
    saida += `${fruta}`;
  } else {
    saida += `${fruta} * `;
  }
}
console.log(saida);

// EXERCÍCIO 2: CRIAÇÃO DE CHINCHILAS
// Objetivo: Calcular crescimento populacional (triplica a cada ano).
// Regra: Mínimo de 2 chinchilas iniciais.
// ----------------------------------------------------------
console.log("\n--- 2. Criação de Chinchilas ---");
let numChinchilas;
let numAnos;

do {
  numChinchilas = Number(prompt("Nº inicial de Chinchilas (min 2): "));
  if (numChinchilas < 2) {
    console.log("Erro: O número deve ser maior ou igual a 2.");
  } else {
    numAnos = Number(prompt("Nº de anos de previsão: "));
  }
} while (numChinchilas < 2);

let chinchiDates = "";
let chinchiAcumuladas = 0;

console.log("\nPrevisão de Crescimento:");

// Sua lógica original preservada
for (let i = 1; i <= numAnos; i++) {
  if (i === 1) {
    chinchiAcumuladas = numChinchilas;
  } else {
    chinchiAcumuladas *= 3;
  }
  chinchiDates += `${i}º Ano: Chinchilas: ${chinchiAcumuladas}\n`;
}
console.log(chinchiDates);
