/* Lógica de Interação com o DOM (index.html)*/

const formPacientes = document.querySelector("#formOdonto");
const respPacientes = document.querySelector("#FilaPacientes");
const atendimento = document.querySelector("#pacienteAtendimento");

const pacientesFila = [];

formPacientes.addEventListener("submit", (e) => {
  e.preventDefault();
  const paciente = formPacientes.inputOdonto.value;
  pacientesFila.push(paciente);
  let lista = "";
  for (let i = 0; i < pacientesFila.length; i++) {
    lista += `${i + 1}. ${pacientesFila[i]}\n`;
  }
  respPacientes.innerText = lista;
  formPacientes.reset();
  formPacientes.inputOdonto.focus();
  console.log(pacientesFila);
});

formPacientes.btnUrgente.addEventListener("click", () => {
  if (formPacientes.inputOdonto.value.trim() === "") {
    alert("Informe um paciente a ser atendido em caráter de urgência!");
    formPacientes.inputOdonto.focus();
    return;
  }

  pacientesFila.unshift(formPacientes.inputOdonto.value);
  let lista = "";
  for (let i = 0; i < pacientesFila.length; i++) {
    lista += `${i + 1}. ${pacientesFila[i]}\n`;
  }
  respPacientes.innerText = lista;
  formPacientes.reset();
  console.log(pacientesFila);
});

formPacientes.btnAtender.addEventListener("click", () => {
  if (pacientesFila.length == 0) {
    atendimento.innerText = "Fila vazia!";
  } else {
    const paciente = pacientesFila.shift();

    atendimento.innerText = paciente;

    let lista = "";
    pacientesFila.forEach((paciente, i) => {
      lista += `${i + 1}. ${paciente}\n`;
    });
    respPacientes.innerText = lista;
  }
  console.log(pacientesFila);
});
