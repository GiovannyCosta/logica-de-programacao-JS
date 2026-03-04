const prompt = require("prompt-sync")();
console.log("=== EXEMPLOS PRÁTICOS (NODE.JS) ===");

// 1. VERIFICADOR DE NÚMEROS PRIMOS
// ----------------------------------------------------------
console.log("\n--- Verificador de Primos ---");
const num = Number(prompt("Digite um número: "));

if (num <= 1) {
  console.log("Não é primo (menor ou igual a 1).");
} else {
  let divisores = 0;
  // Percorre de 2 até o número anterior
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisores++;
      break; // Se achou um divisor, já não é primo, para o loop.
    }
  }

  if (divisores === 0) {
    // Se divisores for 0, ele é primo
    console.log(`${num} é primo.`);
  } else {
    console.log(`${num} não é primo.`);
  }
}

// 2. PROGRAMA ANOS DE COPA
// ----------------------------------------------------------
console.log("\n--- Anos de Copa do Mundo ---");
let anoCopa;

do {
  anoCopa = Number(prompt("Digite o ano (0 para sair): "));

  if (anoCopa === 0) break;

  if (anoCopa === 1942 || anoCopa === 1946) {
    console.log(`Não houve Copa em ${anoCopa} (Segunda Guerra Mundial).`);
  } else if (anoCopa >= 1930 && (anoCopa - 1930) % 4 === 0) {
    console.log(`Sim! ${anoCopa} é ano de Copa!`);
  } else {
    console.log(`${anoCopa} não é ano de Copa.`);
  }
} while (true);

// 3. ETIQUETAS (LOOP ANINHADO OU DUPLA SAÍDA)
// ----------------------------------------------------------
console.log("\n--- Gerador de Etiquetas ---");
const produto = prompt("Produto: ");
const etiquetas = Number(prompt("Qtd de etiquetas: "));

// Imprime 2 etiquetas por linha
for (let i = 0; i < etiquetas / 2; i++) {
  console.log(`${produto.padEnd(20)} ${produto.padEnd(20)}`);
}
// Se for ímpar, imprime a última etiqueta sozinha
if (etiquetas % 2 === 1) {
  console.log(produto);
}

// 4. CÁLCULO DE PARCELAS
// ----------------------------------------------------------
console.log("\n--- Parcelamento ---");
const valorConta = Number(prompt("Valor da conta R$: "));
const numParcelas = Number(prompt("Nº de parcelas: "));

const valorParcela = Math.floor(valorConta / numParcelas);
const valorFinal = valorParcela + (valorConta % numParcelas);

for (let i = 1; i <= numParcelas; i++) {
  if (i === numParcelas) {
    console.log(`${i}ª parcela: R$ ${valorFinal.toFixed(2)} (Ajuste)`);
  } else {
    console.log(`${i}ª parcela: R$ ${valorParcela.toFixed(2)}`);
  }
}
