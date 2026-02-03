//   CAPÍTULO 2: INTEGRAÇÃO COM HTML (DOM)

// 1. SELETORES (BUSCANDO ELEMENTOS)
// ----------------------------------------------------------
// O método querySelector busca elementos pelo ID (#), Classe (.) ou Tag.
// É a ponte entre o HTML e o JS.
const formulario = document.querySelector("form");
const titulo = document.querySelector("h1");

// 2. ESCUTADORES DE EVENTOS (AÇÃO E REAÇÃO)
// ----------------------------------------------------------
// O 'submit' é o evento padrão de envio de formulários.
formulario.addEventListener("submit", (e) => {
  // 3. PREVENINDO O RECARREGAMENTO
  // ------------------------------------------------------
  // Por padrão, o navegador recarrega a página ao enviar um form.
  // O preventDefault() cancela isso, mantendo os dados na tela.
  e.preventDefault();

  // 4. CAPTURANDO E CONVERTENDO VALORES
  // ------------------------------------------------------
  // .value -> Pega o que foi digitado (Sempre vem como STRING!)
  // Number() -> Converte essa string para número.
  const numero = Number(formulario.idDoInput.value);

  // 5. MANIPULAÇÃO MATEMÁTICA (OBJETO MATH)
  // ------------------------------------------------------
  const valorAbsoluto = Math.abs(-5); // 5 (Transforma em positivo)
  const arredondadoNormal = Math.round(4.5); // 5 (Arredonda normalmente)
  const arredondadoBaixo = Math.floor(4.9); // 4 (Tira as casas decimais)
  const arredondadoCima = Math.ceil(4.1); // 5 (Força a subida)
  const potencia = Math.pow(2, 3); // 8 (2 elevado a 3)
  const raiz = Math.sqrt(25); // 5 (Raiz quadrada)
  const aleatorio = Math.random(); // Número aleatório entre 0 e 1

  // 6. SAÍDA DE DADOS (DOM)
  // ------------------------------------------------------
  // .innerText -> Altera o texto visível de um elemento HTML.
  document.querySelector("h3").innerText = `Resultado: ${numero}`;
});
