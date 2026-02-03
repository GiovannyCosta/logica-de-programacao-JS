//   CAPÍTULO 4: ESTRUTURAS CONDICIONAIS

// 1. CONDICIONAL SIMPLES E COMPOSTA (IF / ELSE)
// ----------------------------------------------------------
const media = 7.5;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// 2. OPERADORES DE COMPARAÇÃO
// ----------------------------------------------------------
// ==  (Igual valor)       | === (Igual valor E tipo - estrito)
// !=  (Diferente valor)   | !== (Diferente valor E tipo)
// >   (Maior)             | >=  (Maior ou igual)
// <   (Menor)             | <=  (Menor ou igual)

// 3. OPERADORES LÓGICOS
// ----------------------------------------------------------
// && (E) -> Todas as condições devem ser verdadeiras.
// || (OU) -> Pelo menos uma condição deve ser verdadeira.
// !  (NÃO) -> Inverte o valor (true vira false).

const temIngresso = true;
const censura = 16;
const idade = 15;

if (temIngresso && idade >= censura) {
  console.log("Pode entrar");
} else {
  console.log("Barrado");
}

// 4. SWITCH CASE (MÚLTIPLAS ESCOLHAS)
// ----------------------------------------------------------
// Ideal para quando você tem valores exatos (ex: Menu de opções)
const opcao = "B";

switch (opcao) {
  case "A":
    console.log("Opção A selecionada");
    break; // O break é OBRIGATÓRIO para parar a execução
  case "B":
    console.log("Opção B selecionada");
    break;
  default:
    // Caso nenhuma opção seja atendida
    console.log("Opção inválida");
}
