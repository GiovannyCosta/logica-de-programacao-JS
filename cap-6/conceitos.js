//   CAPÍTULO 6: VETORES
// Vetores ou arrays, em português, sao estruturas de dados que armazenam
// uma colecao de dados, geralmente de um mesmo tipo.
// Os vetores sao representados por colchetes [].
// Exemplos de vetores:

// 1. Vetor de numeros
// vetores contém índices numerados a partir de 0
const numeros = [1, 2, 3, 4, 5];
//     índice : [0, 1, 2, 3, 4]
console.log(numeros); // [1, 2, 3, 4, 5]

// inclusão e exclusão de elementos
// os principais métodos para adicionar e remover elementos de um vetor em js são:
// push() : adiciona um elemento no fim do vetor
// pop() : remove o ultimo elemento do vetor
// unshift() : adiciona um elemento no inicio do vetor
// shift() : remove o primeiro elemento do vetor

// ------------------------------------------------------
numeros.push(6); // adiciona um elemento no fim do vetor
console.log(numeros); // [1, 2, 3, 4, 5, 6]
numeros.pop(); // remove o ultimo elemento do vetor
console.log(numeros); // [1, 2, 3, 4, 5]
numeros.unshift(0); // adiciona um elemento no inicio do vetor
console.log(numeros); // [0, 1, 2, 3, 4, 5]
numeros.shift(); // remove o primeiro elemento do vetor
console.log(numeros); // [1, 2, 3, 4, 5]
// ------------------------------------------------------
// outros métodos para trabalhar com vetores em js:
// slice : retorna uma parte do vetor (fatia)
// splice : remove ou substitui elementos do vetor (emenda)

const letras = ["A", "B", "C", "D"];
const letras2 = letras.slice(-2); // retorna uma parte do vetor (fatia) a partir do indice -2 ate o final
const letras3 = letras.slice(0, -1); // obtém uma parte do vetor (fatia) a partir do indice 0 ate o indice -1 (último elemento excluido)

console.log(letras); //  ["A", "B", "C", "D"]
console.log(letras2); // ["C", "D"]
console.log(letras3); // ["A", "B", "C"]

const retira = letras.splice(2, 1); // remove ou substitui elementos do vetor a partir do indice 2, removendo 1 elemento
console.log(letras); // ["A", "B", "D"]
console.log(retira); // ["C"]

// IMPORTANTE: slice não modifica o vetor original ja o splice modifica - a variavel retira armazena o elemento removido
// ------------------------------------------------------
// 2. tamanho do vetor e exibição dos itens
// uma propiedade muito usada em vetores é o length, que retorna o tamanho do vetor

const numerosLength = [1, 2, 3, 4, 5];
console.log(numerosLength.length); // 5]

// ------------------------------------------------------
// 3. percorrendo vetores
// para percorrer vetores O javascript tem os seguintes metodos for..of e forEach
// sendo equivalentes ao tradicional for

const cidades = ["Rio de Janeiro", "Sao Paulo", "Salvador", "Belo Horizonte"];
for (let cidade of cidades) {
  console.log(cidade); // Rio de Janeiro, Sao Paulo, Salvador, Belo Horizonte

  // let cidade =  recebe o valor de cada item do array
  // of cidades = array de cidades
  // a cada iteração o for percorre o array e atribui o valor a variavel cidade
}

// forEach - mais amplo podendo chamar funcoes para manipular cada elemento do vetor
cidades.forEach((cidade, index) => {
  // primeiro argumento recebe o valor de cada item do array
  // segundo argumento recebe o indice de cada item do array'
  console.log(`Cidade ${index + 1}: ${cidade}`);
});

// operações com vetores
const numeros2 = [1, 2, 3, 4, 5];
let soma = 0;
numeros2.forEach((num) => {
  soma += num;
});
console.log(`Soma dos números: ${soma}`); // Soma dos números: 15
