const prompt = require("prompt-sync")();

console.log("=== EXERCÍCIOS CAPÍTULO 3: NODE.JS ===");

// ----------------------------------------------------------
// EXERCÍCIO 1: PROMOÇÃO DE VEÍCULOS
// Objetivo: Calcular entrada e parcelamento
// ----------------------------------------------------------
console.log("\n--- 1. Revenda de Veículos ---");
const veiculo = prompt("Modelo do veículo: ");
const preco = Number(prompt("Preço R$: "));

const entrada = preco * 0.5; // 50% de entrada
const parcela = (preco * 0.5) / 12; // Saldo em 12x

console.log(`\nPromoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+ 12x de R$: ${parcela.toFixed(2)}`);

// ----------------------------------------------------------
// EXERCÍCIO 2: CONSUMO DE RAÇÃO
// Objetivo: Uso de Math.floor e Operador de Resto (%)
// ----------------------------------------------------------
console.log("\n--- 2. Consumo de Ração ---");
const pesoKg = Number(prompt("Peso do saco (kg): "));
const consumoGrama = Number(prompt("Consumo diário (g): "));

// Conversão para gramas (unificar unidades é essencial)
const pesoTotalGramas = pesoKg * 1000;

// Dias completos (arredondar para baixo, pois não dura meio dia se acabar antes)
const diasDuracao = Math.floor(pesoTotalGramas / consumoGrama);

// O que sobra (resto da divisão)
const sobraGramas = pesoTotalGramas % consumoGrama;

console.log(`\nDuração: ${diasDuracao} dias`);
console.log(`Sobra: ${sobraGramas}g`);

// ----------------------------------------------------------
// EXERCÍCIO 3: CALCULADORA SIMPLES
// Objetivo: Calcular soma, subtração, multiplicação e divisão
// ----------------------------------------------------------
console.log("\n--- 3. Calculadora Simples ---");
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
// ----------------------------------------------------------
console.log(`\nSoma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao.toFixed(2)}`);
