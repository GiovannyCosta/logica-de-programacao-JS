//   CAPÍTULO 3: INTRODUÇÃO AO NODE.JS E ENTRADA DE DADOS

// 1. CONFIGURAÇÃO DO AMBIENTE
// ----------------------------------------------------------
// Diferente do navegador (que tem 'prompt'), o Node precisa de uma biblioteca externa.
// Comando de instalação: npm install prompt-sync
const prompt = require("prompt-sync")(); // Importa e já executa a função

// 2. ENTRADA DE DADOS
// ----------------------------------------------------------
// O prompt sempre retorna uma STRING.
const nome = prompt("Digite seu nome: ");

// 3. CONVERSÃO DE TIPOS (CASTING)
// ----------------------------------------------------------
// Para cálculos, precisamos converter a string para número.
const idadeInput = prompt("Digite sua idade: ");
const idade = Number(idadeInput);

// 4. OPERADORES ARITMÉTICOS IMPORTANTES
// ----------------------------------------------------------
const soma = 10 + 5;
const divisao = 10 / 2;
const resto = 10 % 3; // Retorna 1 (Útil para saber se é par/ímpar ou sobras)

// 5. MATH (ARREDONDAMENTOS)
// ----------------------------------------------------------
// Math.floor(X): Arredonda para baixo (ex: dias completos de ração)
// Math.ceil(X):  Arredonda para cima (ex: parcelas que não podem ser quebradas)
