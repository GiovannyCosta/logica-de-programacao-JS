// Prompt-Sync: Como o Node não possui um prompt() nativo como o navegador,
// utilizamos a biblioteca prompt-sync para capturar entradas do usuário via teclado.
// FIXAÇÃO: No Node.js, entradas são sempre strings, por isso o uso de Number()

const prompt = require("prompt-sync")();
// require("prompt-sync")(): Esta linha importa a biblioteca e a inicializa imediatamente para uso.

// Primeira entrada de dados usando prompt
// const veiculo = prompt("Digite o nome do veiculo: ");
// const preco = Number(prompt("Digite o valor do veículo: "));

// const porc = 50 / 100;
// const valorEntrada = preco * porc;
// const parcela = (preco * porc) / 12;

// console.log(`Promoção: ${veiculo}`);
// console.log(`Entrada de ${valorEntrada.toFixed(2)}`);
// console.log(`+12x de ${parcela.toFixed(2)}`);
// console.log(porc);

// Exercicio de fixação
// Calculadora
const num1 = Number(prompt("Digite o primeiro valor: "));
const num2 = Number(prompt("Digite o segundo valor: "));
console.log(`\n--- Calculadora ---`);
console.log(`Soma: ${num1 + num2}`);
console.log(`Multiplicação: ${num1 * num2}`);

// CONSUMO DE RAÇÃO
const kgRacao = Number(prompt("Digite o kg: "));
const consumoDiario = Number(prompt("Consumo por dia: "));

// CONVERSÃO: 1kg = 1000g
const pesoGrama = kgRacao * 1000;

// LÓGICA: Math.floor garante apenas dias completos (sem decimais)
const dias = Math.floor(pesoGrama / consumoDiario);

// LÓGICA: O operador '%' (módulo) captura exatamente o que sobrou no saco
const sobras = pesoGrama % consumoDiario;
console.log(`\n--- Relatório de Consumo ---`);
console.log(`Duração estimada: ${dias} dias`);
console.log(`Sobra no saco: ${sobras}g`);
