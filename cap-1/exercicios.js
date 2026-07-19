const prompt = require("prompt-sync")();

console.log("=== LISTA DE EXERCÍCIOS CAPÍTULO 1 ===");
console.log("\nEscolha um exemplo:");
console.log("1: Vizinhos do Número");
console.log("2: Conta da Pizzaria");
console.log("3: Loja de Descontos");
console.log("4: Conversão de Dias para Segundos");
console.log("0: Sair");

let opcao;
do {
  opcao = Number(prompt("Selecione um exercício: "));

  switch (opcao) {
    case 1:
      console.log("Opção: 1: Vizinhos do Número");
      console.log("Objetivo: Mostrar sucessor e antecessor.");
      console.log("\n--- 1. Sucessor e Antecessor ---");
      const numero = Number(prompt("Digite um número: "));
      console.log(`Antecessor: ${numero - 1}`);
      console.log(`Sucessor: ${numero + 1}`);
      //
      break;
    case 2:
      console.log("Opção: 2: Conta da Pizzaria");
      console.log("Objetivo: Calcular divisão de conta por pessoa.");
      console.log("\n--- 2. Divisão de Conta ---");
      const valorConta = Number(prompt("Valor total da conta R$: "));
      const clientes = Number(prompt("Número de pessoas: "));
      const valorPorPessoa = valorConta / clientes;
      console.log(`Cada um deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
      //
      break;
    case 3:
      console.log("Opção: 3: Loja de Descontos");
      console.log("Objetivo: Calcular desconto de produto");
      console.log("\n--- 3. Pagamento Loja ---");
      const preco = Number(prompt("Preço do produto R$: "));
      const aVista = preco - preco * 0.1; // 10% de desconto
      const parcelado = preco / 3; // 3x sem juros
      console.log(`À vista (10% desc): R$ ${aVista.toFixed(2)}`);
      console.log(`Ou 3x de: R$ ${parcelado.toFixed(2)}`);
      //
      break;
    case 4:
      console.log("Opção: 4: Dias em Horas");
      console.log("Objetivo: Converter horas em dias.");
      console.log("\n--- 4. Dias em Horas ---");
      const dias = Number(prompt("Nº de Dias: "));
      const horas = dias * 24;
      console.log(`${dias} dias equivalem a ${horas} horas.`);

      break;
    case 0:
      console.log("\nSaindo...");
      break;
    default:
      console.log("\nOpção inválida! Tente novamente.");
  }
} while (opcao != 0);
