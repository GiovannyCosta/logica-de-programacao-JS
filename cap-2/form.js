// --- EXEMPLO: SAUDAÇÃO ---
const formSaudacao = document.querySelector("#formSaudacao");
const respSaudacao = document.querySelector("#respSaudacao");

formSaudacao.addEventListener("submit", e => {
  e.preventDefault();
  const nome = formSaudacao.inputNome.value;
  respSaudacao.innerText = `Olá, ${nome}!`;
  formSaudacao.reset();
});

// --- EXERCÍCIO A: CINEMA ---
const formCinema = document.querySelector("#formCinema");
const respCinemaTitulo = document.querySelector("#respCinemaTitulo");
const respCinemaTempo = document.querySelector("#respCinemaTempo");

formCinema.addEventListener("submit", e => {
  e.preventDefault();

  const titulo = formCinema.inputTitulo.value;
  const duracaoMinutos = Number(formCinema.inputDuracao.value);

  // Lógica: Divide por 60 e arredonda para baixo para horas, usa o resto (%) para minutos
  const horas = Math.floor(duracaoMinutos / 60);
  const minutos = duracaoMinutos % 60;

  respCinemaTitulo.innerText = titulo;
  respCinemaTempo.innerText = `${horas}h e ${minutos}min`;
});

// --- EXERCÍCIO B: REVENDA ---
const formVeiculo = document.querySelector("#formVeiculo");
const respVeiculoNome = document.querySelector("#respVeiculoNome");
const respVeiculoEntrada = document.querySelector("#respVeiculoEntrada");
const respVeiculoParcela = document.querySelector("#respVeiculoParcela");

formVeiculo.addEventListener("submit", e => {
  e.preventDefault();

  const veiculo = formVeiculo.inputVeiculo.value;
  const preco = Number(formVeiculo.inputPreco.value);

  // Lógica: 50% de entrada e o restante em 12x
  const valorEntrada = preco * 0.5;
  const valorParcela = valorEntrada / 12;

  respVeiculoNome.innerText = `Promoção: ${veiculo}`;
  respVeiculoEntrada.innerText = `Entrada de R$: ${valorEntrada.toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2 }
  )}`;
  respVeiculoParcela.innerText = `+ 12x de R$: ${valorParcela.toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2 }
  )}`;
});

// --- EXERCÍCIO C: RESTAURANTE ---
const formBuffet = document.querySelector("#formBuffet");
const respBuffet = document.querySelector("#respBuffet");

formBuffet.addEventListener("submit", e => {
  e.preventDefault();

  const precoKg = Number(formBuffet.inputPrecoKg.value);
  const consumoGr = Number(formBuffet.inputConsumo.value);

  // Converte gramas para kg e multiplica pelo preço
  const totalPagar = (consumoGr / 1000) * precoKg;

  respBuffet.innerText = `Valor a pagar: R$ ${totalPagar.toFixed(2)}`;
});

// ---- EXERCÍCIOS DE FIXAÇÃO ----
// --- EXERCÍCIO A: FARMÁCIA ---

const formFarmacia = document.querySelector("#formFarmacia");
const respMedicamento = document.querySelector("#respMedicamento");
const respPrecoMed = document.querySelector("#respPrecoMed");

formFarmacia.addEventListener("submit", e => {
  e.preventDefault();
  const medicamento = formFarmacia.inputMedicamento.value;
  const precoMedicamento = Number(formFarmacia.inputPrecoMed.value);
  const valorPromocao = precoMedicamento * 2;
  respMedicamento.innerText = `Promoção de ${medicamento}`;
  respPrecoMed.innerText = `Leve 2 por apenas: R$${Math.floor(valorPromocao)}`;
});
