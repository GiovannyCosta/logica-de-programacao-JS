const prompt = require("prompt-sync")();

/* ======================================================
   EXERCÍCIO 1 – Número vizinhos
====================================================== */
// const numero = Number(prompt("Digite um número positivo: "));
// console.log(`Os vizinhos de ${numero} são: ${numero + 1} e ${numero - 1}`);

/* ======================================================
   EXERCÍCIO 2 – pizzaria - compra
====================================================== */
// const valorPizza = Number(prompt("Digite o valor total da compra: "));
// const QtdPessoas = Number(prompt("Digite quantos vão pagar: "));

// console.log(
//   `O valor: ${valorPizza} dividido para ${QtdPessoas} pessoas é: ${
//     valorPizza / QtdPessoas
//   }`
// );

/* ======================================================
   EXERCÍCIO 3 – loja - compra com desconto
====================================================== */
// const valorDasCompras = Number(prompt("Digite o valor total das compras: "));
// const qdtParcelas = Number(prompt("Digite a quantidade que deseja parcelar: "));

// console.log(`Preço R$: ${valorDasCompras}`);
// console.log(`Total à vista R$: ${valorDasCompras - 0.1 * valorDasCompras}`);
// console.log(
//   `parcela de ${qdtParcelas}: - R$: ${valorDasCompras / qdtParcelas}`,
// );

// ========================================================== //
// ========================================================== //
// ========================================================== //

// 1. Dobro de um número: Leia um número e exiba o seu dobro.
// 2. Dias e Horas: Leia um valor em dias e converta para o total de horas.
// 3. Sucessor e Antecessor: Leia um número inteiro e exiba o seu antecessor e o seu sucessor.

const valorNumEx = Number(prompt("Digite um número: "));
// ex1
console.log("O dobro de " + valorNumEx + " é: " + valorNumEx * 2);

// ex2
console.log("== Dias para horas ==");
console.log(valorNumEx + " Dias = " + valorNumEx * 24 + " horas");

// ex2
console.log("O Antecessor de " + valorNumEx + " é: " + (valorNumEx - 1));
console.log("O Sucessor de " + valorNumEx + " é: " + (valorNumEx + 1));
