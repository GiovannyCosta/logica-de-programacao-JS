// --- FOR ---
// Repetição com variavel de controle
// --- EXEMPLO: DESCRECER NÚMEROS ---
const desc = document.querySelector("#formDecrescente");
desc.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberSelected = Number(desc.inputdecrescente.value);
  let respDesc = "";
  for (let i = numberSelected; i >= 0; i--) {
    respDesc += `${i}\n`;
  }
  document.querySelector("#respDecrescente").innerText = respDesc;
});

// --- EXEMPLO: TABUADA ---
const multTables = document.querySelector("#formTabuada");
multTables.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberSelected = Number(multTables.inputTabuada.value);

  let table = ""; // variavel para armazenar/concatenar a tabuada

  // cria uma variavel i que começa com valor 1 e incrementa ate 10
  for (let i = 1; i <= 10; i++) {
    // a variavel table concatena acumulando o resultado da tabuada
    table += `${numberSelected} x ${i} = ${numberSelected * i}\n`;
  }
  document.querySelector("#respTabuada").innerText = table;
});

// ----------------------------------------------------------

// --- WHILE
// Repetição com teste no início da condição
// while (condicao) {
//   // bloco de instrucoes
// }

// --- EXEMPLO: DESCRECER NÚMEROS ---
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

// ----------------------------------------------------------

// --- DO-WHILE
// Repetição com teste no final da condição
// do {
//   // bloco de instrucoes
// } while (condicao);

// --- EXEMPLO: DESCRECER NÚMEROS ---
// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j >= 0);

const parForm = document.getElementById("formPares");
parForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const respEL = document.querySelector("#respPares");
  const numberSelected = Number(parForm.inputPares.value);
  if (numberSelected === 0 || isNaN(numberSelected)) {
    respEL.innerText = "Digite um número válido!";
    inputPares.value = ""; // Limpa o input
    inputPares.focus(); // Coloca o cursor piscando de volta no input
    return;
  }

  // 2. SE PASSOU PELA VALIDAÇÃO, EXECUTA O BLOCO
  let pares = "";
  for (let i = 0; i <= numberSelected; i++) {
    if (i % 2 === 0) {
      pares += `${i}\n`;
    }
  }

  respEL.innerText = pares;
});

// ----------------------------------------------------------

// USANDO PROMPT E DO-WHILE PARA VALIDAÇÃO DE NUMERO DIGITADO
// let num;
// do {
// num = Number(prompt("Digite um número: "));
//   if (num == 0 || isNaN(num)) {
//     // alert("Digite um número válido!");
//   }
// } while (num === 0 || isNaN(num));

// let pares = "";
// for (let i = 2; i <= num; i = i + 2) {
//   if (i == num) {
//     pares += `${i}`;
//   } else {
//     pares += `${i},`;
//   }
// }
//  alert(pares);

// ----------------------------------------------------------

alert("digite 0 para sair");
do {
  const num = prompt("Digite um número: ");
  if (num == 0 || isNaN(num)) {
    const sair = confirm("Deseja sair?");
    if (sair) {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 == 0) {
    alert(`O dobro de num é: ${num * 2}`);
  } else {
    alert(`O triplo de num é: ${num * 3}`);
  }
} while (true);
alert("bye bye");
