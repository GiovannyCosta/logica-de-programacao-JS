const prompt = require("prompt-sync")();

console.log("=== LISTA DE EXERCÍCIOS CAPÍTULO 1 ===");

// EXERCÍCIO 1: Vizinhos do Número
// Objetivo: Fixar operações de soma e subtração simples.
console.log("\n--- 1. Sucessor e Antecessor ---");
const numero = Number(prompt("Digite um número: "));
console.log(`Antecessor: ${numero - 1}`);
console.log(`Sucessor: ${numero + 1}`);
//

// EXERCÍCIO 2: Conta da Pizzaria
// Objetivo: Fixar divisão e entrada de dados.
console.log("\n--- 2. Divisão de Conta ---");
const valorConta = Number(prompt("Valor total da conta R$: "));
const clientes = Number(prompt("Número de pessoas: "));
const valorPorPessoa = valorConta / clientes;
console.log(`Cada um deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
//

// EXERCÍCIO 3: Loja de Descontos
// Objetivo: Fixar porcentagem e parcelamento.
console.log("\n--- 3. Pagamento Loja ---");
const preco = Number(prompt("Preço do produto R$: "));
const aVista = preco - preco * 0.1; // 10% de desconto
const parcelado = preco / 3; // 3x sem juros
console.log(`À vista (10% desc): R$ ${aVista.toFixed(2)}`);
console.log(`Ou 3x de: R$ ${parcelado.toFixed(2)}`);
//

// EXERCÍCIO 4: Conversão de Dias
console.log("\n--- 4. Dias em Horas ---");
const dias = Number(prompt("Nº de Dias: "));
const horas = dias * 24;
console.log(`${dias} dias equivalem a ${horas} horas.`);
