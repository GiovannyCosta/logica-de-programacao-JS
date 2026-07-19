const prompt = require("prompt-sync")();
function initGame() {
  let numErros = [];
  let numChances = 6;
  let pWin = false;
  const random = Math.floor(Math.random() * 100) + 1;

  console.log("=== DESCUBRA O NÚMERO (CAP 6) ===");
  console.log("Dica: é um número entre 1 e 100");
  console.log(random);

  while (!pWin == true && numChances > 0) {
    const tentativa = Number(prompt("Tente adivinhar o número: "));

    if (tentativa == random) {
      console.log("Parabéns, você acertou!");
      pWin = true;
    } else {
      if (numErros.includes(tentativa)) {
        console.log("Você já apostou este número");
        console.log(`Erros: ${numErros}`);
      } else {
        numErros.push(tentativa);
        numChances--;

        console.log(`Erros: ${numErros}`);

        if (numChances === 0) {
          console.log("Você perdeu!");
          pWin = true;
        } else {
          console.log(`Ainda faltam ${numChances} tentativas`);
          const dica = tentativa > random ? "MENOR" : "MAIOR";
          console.log(`Dica: O número sorteado é ${dica} que ${tentativa}.`);
        }
      }
    }
  }
}
initGame();
