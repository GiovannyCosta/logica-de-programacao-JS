/* Lógica de Interação com o DOM (index.html)
 */

// --- 1. NÚMEROS DECRESCENTES (FOR) ---
const formDecrescente = document.querySelector("#formDecrescente");
const respDecrescente = document.querySelector("#respDecrescente");

formDecrescente.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(formDecrescente.inputdecrescente.value);
  let resposta = "";

  for (let i = numero; i >= 0; i--) {
    resposta += `${i}\n`; // Concatena os números com quebra de linha
  }
  respDecrescente.innerText = resposta;
});

// --- 2. TABUADA (FOR) ---
const formTabuada = document.querySelector("#formTabuada");
const respTabuada = document.querySelector("#respTabuada");

formTabuada.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(formTabuada.inputTabuada.value);
  let resposta = "";

  for (let i = 1; i <= 10; i++) {
    resposta += `${numero} x ${i} = ${numero * i}\n`;
  }
  respTabuada.innerText = resposta;
});

// --- 3. NÚMEROS PARES (VALIDAÇÃO) ---
const formPares = document.getElementById("formPares");
const respPares = document.querySelector("#respPares");

formPares.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(formPares.inputPares.value);

  // Validação simples
  if (numero === 0 || isNaN(numero)) {
    alert("Por favor, digite um número válido!");
    formPares.inputPares.focus();
    return;
  }

  let resposta = `Pares entre 1 e ${numero}:\n`;
  for (let i = 2; i <= numero; i += 2) {
    resposta += `${i}, `;
  }
  respPares.innerText = resposta;
});

// --- 4. CONTAS DO MÊS (ACUMULADOR) ---
const formContas = document.getElementById("formContas");
const respContas = document.querySelector("#respContas");
const respValorTotal = document.querySelector("#respValorTotal");

// Variáveis globais para acumular os dados enquanto a página não for recarregada
let valTotal = 0;
let numContas = 0;
let listaContas = "";

formContas.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = formContas.inputDescricao.value;
  const valor = Number(formContas.inputValorConta.value);

  numContas++; // Contador
  valTotal += valor; // Acumulador
  listaContas += `${descricao} - R$ ${valor.toFixed(2)}\n`;

  respContas.innerText = `${listaContas}--------------------------------`;
  respValorTotal.innerText = `${numContas} conta(s) - Total: R$ ${valTotal.toFixed(2)}`;

  // Limpa os campos para nova entrada
  formContas.inputDescricao.value = "";
  formContas.inputValorConta.value = "";
  formContas.inputDescricao.focus();
});

// --- 5. FÁBRICA DE ESTRELAS (IF/ELSE DENTRO DO LOOP) ---
const formEstrelas = document.getElementById("formEstrelas");
const respEstrelas = document.querySelector("#respEstrelas");

formEstrelas.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(formEstrelas.inputEstrelas.value);
  let estrelas = "";

  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 1) {
      estrelas += "⭐️";
    } else {
      estrelas += "-";
    }
  }
  respEstrelas.innerText = estrelas;
});
