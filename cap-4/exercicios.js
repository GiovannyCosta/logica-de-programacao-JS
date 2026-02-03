//   EXERCÍCIO PRÁTICO: SITUAÇÃO DO ALUNO

const formAluno = document.querySelector("#formAluno");
const resultado = document.querySelector("#respSituacaoAluno");

formAluno.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  // 1. Obter valores do formulário
  const aluno = formAluno.inputNomeAluno.value;
  const nota1 = Number(formAluno.inputNotaAluno1.value);
  const nota2 = Number(formAluno.inputNotaAluno2.value);

  // 2. Processamento (Cálculo da Média)
  const media = (nota1 + nota2) / 2;

  // 3. Lógica Condicional (Saída)
  if (media >= 7) {
    resultado.innerText = `Parabéns ${aluno}! Você foi Aprovado(a) com média ${media.toFixed(1)}`;
    resultado.style.color = "blue";
  } else if (media >= 4) {
    resultado.innerText = `Atenção ${aluno}. Você está em Recuperação com média ${media.toFixed(1)}`;
    resultado.style.color = "orange";
  } else {
    resultado.innerText = `Sinto muito ${aluno}. Você foi Reprovado(a) com média ${media.toFixed(1)}`;
    resultado.style.color = "red";
  }
});
