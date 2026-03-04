//   CAPÍTULO 5: ESTRUTURAS DE REPETIÇÃO (LOOPS)

// 1. FOR (PARA)
// ----------------------------------------------------------
// Ideal quando o número de repetições é conhecido (ex: contar até 10, percorrer um array).
// Sintaxe: for (inicialização; condição; incremento) { ... }
for (let i = 0; i < 10; i++) {
  console.log(`Número: ${i}`);
}

// 2. WHILE (ENQUANTO)
// ----------------------------------------------------------
// Ideal quando o número de repetições é desconhecido.
// O teste é feito no INÍCIO. Se a condição for falsa de cara, ele nem executa.
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}

// 3. DO-WHILE (FAÇA... ENQUANTO)
// ----------------------------------------------------------
// Garante pelo menos UMA execução, pois o teste é feito no FINAL.
// Útil para menus ou validações onde o usuário precisa digitar algo pelo menos uma vez.
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// 4. CONCEITOS IMPORTANTES
// ----------------------------------------------------------
// NaN (Not a Number):
// Retornado quando uma operação matemática falha (ex: multiplicar texto por número).
console.log(Number("texto")); // Saída: NaN

// CONTADORES vs ACUMULADORES:
// - Contador: Incrementa um valor fixo (ex: i++ ou i = i + 1). Conta quantas vezes algo ocorreu.
// - Acumulador: Soma valores variáveis (ex: total += preco). Soma saldos, notas, etc.

// 5. CONTROLE DE FLUXO (BREAK / CONTINUE)
// ----------------------------------------------------------
// break: Interrompe e SAI do laço imediatamente.
// continue: Pula a iteração atual e vai para a próxima verificação.

// Exemplo de estrutura:
// while (condicao) {
//   if (algo_especifico) {
//     continue; // Volta para o teste do while
//   }
//   if (erro_grave) {
//     break; // Sai do while
//   }
// }