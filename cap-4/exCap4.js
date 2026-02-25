const prompt = require("prompt-sync")();

console.log("=== EXERCÍCIOS DE FIXAÇÃO (CAP 4) ===");

// 1. VERIFICAR PAR OU ÍMPAR
console.log("\n--- 1. Par ou Ímpar ---");
const numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) {
  console.log(`${numero} é Par`);
} else {
  console.log(`${numero} é Ímpar`);
}

// 2. VELOCIDADE PERMITIDA
// Leia a velocidade. Se passar de 80km/h, avise que foi multado.
console.log("\n--- 2. Radar de Velocidade ---");
const velocidade = Number(prompt("Velocidade (km/h): "));
if (velocidade > 80) {
  console.log("Multado! Você excedeu o limite.");
} else {
  console.log("Boa viagem! Velocidade permitida.");
}

// 3. FUSO HORÁRIO
// Leia a hora no Brasil e exiba a hora na França (+5h).
console.log("\n--- 3. Hora na França ---");
const horaBrasil = Number(prompt("Hora no Brasil: "));
let horaFranca = horaBrasil + 5;
if (horaFranca > 24) {
  horaFranca = horaFranca - 24;
}
console.log(`Hora na França: ${horaFranca.toFixed(2)}`);

// 4. RAIZ QUADRADA EXATA
// Se a raiz for exata, mostre-a. Senão, diga que não há raiz exata.
console.log("\n--- 4. Raiz Quadrada ---");
const numRaiz = Number(prompt("Número: "));
const raiz = Math.sqrt(numRaiz);
if (Number.isInteger(raiz)) {
  console.log(`Raiz: ${raiz}`);
} else {
  console.log(`Não há raiz exata para ${numRaiz}`);
}

// 5. LADOS DE UM TRIANGULO
// Leia 3 lados e diga se é um isosceles, equilátero ou escaleno.
console.log("\n--- 5. Triângulo ---");
const lado1 = Number(prompt("Lado 1: "));
const lado2 = Number(prompt("Lado 2: "));
const lado3 = Number(prompt("Lado 3: "));
if (lado1 == lado2 && lado2 == lado3) {
  console.log("Tipo: Equilátero");
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
  console.log("Tipo: Isosceles");
} else {
  console.log("Tipo: Escaleno");
}
