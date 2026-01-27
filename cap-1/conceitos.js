// CONCEITO: Tipagem Dinâmica e Coerção

const a = "20";
const b = a * 2;
const c = a / 2;
const d = a - 2;
const e = a + 2;
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Nas operações acima, o JavaScript converte a string "20"
// em número para realizar as operações de multiplicação, divisão e subtração.
// No entanto, na operação de adição, ele concatena a string "20"
//  com o número 2, resultando em "202".

console.log("--- Conversão explícita ---");
// usando métodos:
// O Number() é usado para garantir que a operação seja matemática - convertendo String Para Num
const f = Number(a) + 2; // Converte 'a' para número antes de somar
console.log(f); // Resultado correto: 22

// ========================================================== //
// ========================================================== //
// ========================================================== //

// CONCEITO: Estrutura de Repetição (Loop While) para entrada e saída de dados usando Alert() / console.log()
// prompt para usar o terminal
// npm i prompt-sync
const prompt = require("prompt-sync")();

// variavel que guarda valor de entrada
const contador = prompt("Digite um número positivo: ");
// incrementador
let i = 0;
// recebe o número máximo de loops
while (i <= contador) {
  console.log("Alerta número " + i + " de: " + contador);

  // incrementa o contador (contador = contador +1)
  // isso evita loop infinito
  i++;
}
