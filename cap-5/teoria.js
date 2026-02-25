// tipos dee laços de repetição

// 1. FOR
// 2. WHILE
// 3. DO-WHILE

// 1. FOR
// Ideal quando o número de repetições é conhecido
// ----------------------------------------------------------
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. WHILE
// Executa enquanto a condição for verdadeira
// Ideal quando o número de repetições é desconhecido
// por ser feito um teste bo inicio, pode ser que que os comandos nunca sejam executados
// ----------------------------------------------------------
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 3. DO-WHILE
// Garante pelo menos uma execução
// Ideal quando o número de repetições é desconhecido
// a verificação ocorre depois da primeira execução - no final do bloco
// ----------------------------------------------------------
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// - NaN
// Not a Number
// Quando um valor recebido é diferente de um number ele retorna NaN
const num = Number("não é um número");
console.log(num);
// saída = NaN

// ----------------------------------------------------------
// - BREAK
// - CONTINUE
// As linguagens dispoem de dois comandos especiais para o controle de fluxo em laços de repetição
// servindo paras auxiliar no controle de execução dos comandos do loop

// ----------------------------------------------------------

// while (condition_1) {
//  COMANDOS
//   if (condition_2) {
//     continue; o comando faz com que a condição continue sendo testada, se VERDADEIRO, continua a execução
//   }
// COMANDOS2
//   if (condition_3) {
//     break; o comando faz com que o programa saia do laço de repetição.
//   }

// }

// ----------------------------------------------------------
// Contadores e acumuladores
// o uso de contadores e acumuladores em um programa permite a exibição de contagens e totalizaçãoes
// Possuindo duas características:
// º A variavel contadora ou acumulador deve ser iniciada com o valor atribuido (geralmente 0).
// º A variavel contadora ou acumulador deve receber ela mesma mais algum valor a cada execução.
// A diferença entre contadores e acumuladores e que o primeiro recebe o valor atribuido e o segundo recebe o valor da variavel mais algum valor a cada execução
// ex:
// let soma = 0; // acumulador - deve ser declarado com let
// soma = soma + 5; // contadora - em uma repetição irá acumular ele mesmo com o valor de 5
// simplificação += -= *= /=
