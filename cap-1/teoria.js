//   CAPÍTULO 1: FUNDAMENTOS E ENTRADA DE DADOS

// 1. VARIÁVEIS E TIPAGEM DINÂMICA
// ----------------------------------------------------------
const texto = "20"; // String (texto)
const numero = 2; // Number (número)

// 2. COERÇÃO DE TIPOS
// ----------------------------------------------------------
// O JS tenta converter strings em números para *, / e -
console.log("Multiplicação:", texto * numero); // 40 (Funciona)
console.log("Divisão:", texto / numero); // 10 (Funciona)
console.log("Subtração:", texto - numero); // 18 (Funciona)

// O sinal de '+' serve para SOMAR e CONCATENAR (juntar)
// Se houver uma string, ele prefere concatenar.
console.log("Adição (Concatenação):", texto + numero); // "202" (Texto)

// Conversão Explícita
// Sempre use Number() quando ler dados do usuário para garantir matemática.
console.log("Adição Correta:", Number(texto) + numero); // 22 (Número)

// 3. ENTRADA E SAÍDA (NODE.JS VS NAVEGADOR)
// ----------------------------------------------------------
// No Navegador usamos: alert("Olá") e prompt("Digite algo")
// No Node.js precisamos da biblioteca 'prompt-sync':

const prompt = require("prompt-sync")(); // Importa e ativa a biblioteca
const nome = prompt("Qual seu nome? ");
console.log(`Olá, ${nome}!`); // Template String (uso de crase ` `)

// 4. String tradicional e Template String
// ----------------------------------------------------------
// Strings tradicionais são delimitadas por aspas simples (') ou aspas duplas (").

const nomeString = "Mundo";
const saudacao = "Olá, " + nomeString + "!";
// Saída: Olá, Mundo!

// Template strings são delimitadas por acentos graves (`)
// Interpolação: Permite embutir variáveis e expressões diretamente na string usando a sintaxe ${expressao}.
const nomeTemplate = "Mundo";
const saudacaoTemplate = `Olá, ${nomeTemplate}!`; // Mais limpo e fácil de ler
// Saída: Olá, Mundo!
