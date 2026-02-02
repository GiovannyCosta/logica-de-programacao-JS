const prompt = require("prompt-sync")();

/* ======================================================
   EXERCÍCIOS DE FIXAÇÃO - CAPÍTULO 2
====================================================== */
// 1. Lan House: Leia o valor por 15min de uso e o tempo total.
// Exiba o valor a pagar (arredonde para cima frações de 15min).

// 2. Supermercado (Promoção): Leia produto e preço.
// Leve 3 produtos e o 3º sai por 50%. Exiba o total.

// 3. Lanterna de Notas: Leia 3 notas de um aluno e exiba a média
// formatada com 1 casa decimal usando .toFixed(1).

// 4. Conversor de Medidas: Leia um valor em metros e exiba
// em centímetros e milímetros via innerText.

// 5. Calculadora de Peso Ideal: Leia altura e sexo.
// Calcule o peso ideal (Masculino: 22 * alt² | Feminino: 21 * alt²).
// DICA: Use Math.pow(altura, 2)

// ex1
// receber um valor
// definir o preço para cada 15 minutos
// quebrar em blocos de 15 em 15 e multiplicar pelo preço por quinzena
const valorRequerido = Number(prompt("Digite o tempo que deseja (min): "));
const valorPorQuinzeMin = 2;
let pagar = (valorRequerido / 15) * valorPorQuinzeMin;
console.log("Valor a pagar: R$" + pagar.toFixed(2));

// ex2
const nomeProduto = prompt("Digite o nome do produto: ");
const valorProduto = Number(prompt("Digite o valor deste produto: "));
const Promocao = valorProduto * 0.5;
console.log("PRODUTO:  " + nomeProduto.padStart(15));
console.log("VALOR:    " + String(valorProduto).padStart(15));
console.log(
  "PROMOÇÃO - TERCEIRO PRODUTO POR: " + String(Promocao).padStart(15),
);
console.log("==============");
