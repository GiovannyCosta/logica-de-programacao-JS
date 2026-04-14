## CAPÍTULO 6: VETORES

- Vetores ou arrays, em português, sao estruturas de dados que armazenam uma colecao de dados, geralmente de um mesmo tipo.

- Os vetores sao representados por colchetes []. <br>

  > **`importante`:** vetores contém índices numerados a partir de 0.

- Exemplos de vetores:

```javascript
const numeros = [1, 2, 3, 4, 5];
// índice:      [0, 1, 2, 3, 4]
console.log(numeros); // [1, 2, 3, 4, 5]
```

### inclusão e exclusão de elementos

> os principais métodos para adicionar e remover elementos de um vetor em javascript são:

- `push()` : adiciona um elemento no fim do vetor
- `pop()` : remove o ultimo elemento do vetor
- `unshift()` : adiciona um elemento no inicio do vetor
- `shift()` : remove o primeiro elemento do vetor

```javascript
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]
```

```javascript
numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]
```

```javascript
numeros.unshift(0);
console.log(numeros); // [0, 1, 2, 3, 4, 5]
```

```javascript
numeros.shift();
console.log(numeros); // [1, 2, 3, 4, 5]
```

> outros métodos para trabalhar com vetores em js:
>
> - `slice()` : retorna uma parte do vetor (fatia)
> - `splice()`: remove ou substitui elementos do vetor (emenda)

```javascript
const letras = ["A", "B", "C", "D"];
const letras2 = letras.slice(-2); // retorna uma parte do vetor (fatia) a partir do indice -2 ate o final
const letras3 = letras.slice(0, -1); // obtém uma parte do vetor (fatia) a partir do indice 0 ate o indice -1 (último elemento excluido)

console.log(letras); //  ["A", "B", "C", "D"]
console.log(letras2); // ["C", "D"]
console.log(letras3); // ["A", "B", "C"]
```

> **`importante`:**<br>
> `slice` não modifica o vetor original.<br>
> `splice` modifica o vetor original<br>
> a variavel `retira` armazena o elemento removido
>
> ```javascript
> const retira = letras.splice(2, 1); // remove ou substitui elementos do vetor a partir do indice 2, removendo 1 elemento
> console.log(letras); // ["A", "B", "D"]
> console.log(retira); // ["C"]
> ```

### tamanho do vetor e exibição dos itens

- uma propiedade muito usada em vetores é o `length`, que retorna o tamanho do vetor
- podendo ser usando em um for, onde a variavel de controle `i` começa em 0, e repete enquanto `i` for menor que o tamanho do vetor.`length`.

```javascript
const numerosLength = [1, 2, 3, 4, 5];
console.log(numerosLength.length); // 5]
```

> há também outras formas de exibir o conteúdo de um vetor, eles convertem o vetor em uma string

- sendo os metódos:<br>
  `toString()` : uma vírgula separando os elementos do vetor.<br>
  `join()` : um caractere especificado separando os elementos do vetor.

```javascript
const palavrasVetor = ["ABACAXI", "MANGA"];

console.log(palavrasVetor.toString()); // ABACAXI,MANGA
console.log(palavrasVetor.join("-")); // ABACAXI-MANGA
```

### percorrendo vetores

- para percorrer vetores O javascript tem os seguintes metodos `for..of` e `forEach`, sendo equivalentes ao tradicional `for`

> exemplo de uso com `for..of`
>
> ```javascript
> const cidades = ["Rio de Janeiro", "Sao Paulo", "Salvador", "Belo Horizonte"];
>
> for (let cidade of cidades) {
>   console.log(cidade); // Rio de Janeiro, Sao Paulo, > Salvador, Belo Horizonte
> }
> ```
>
> **let `cidade`** = recebe o valor de cada item do array
> <br>
> **`of` `cidades`** = array de cidades
> <br>
>
> - a cada iteração o for percorre o array e atribui o valor a variavel cidade

<br>

> `forEach` - mais amplo podendo chamar funcoes para manipular cada elemento do vetor
>
> ```javascript
> const cidades = ["Manaus", "Sao Paulo", "Salvador", "Belo Horizonte"];
>
> cidades.forEach((cidade, index) => {
>   console.log(`Cidade ${index + 1}: ${cidade}`);
>   // Cidade 1: Manaus
>   // Cidade 2: Sao Paulo
>   // Cidade 3: Salvador
>   // Cidade 4: Belo Horizonte
> });
> ```
>
> primeiro argumento **(cidade)** recebe o valor de cada item do array
> <br>
> segundo argumento **(index)** recebe o indice de cada item do array

- algumas operações com vetores usando `forEach` ficam mais limpos e faceis de ler
- ex:

  ```javascript
  const numeros = [1, 2, 3, 4, 5];

  let soma = 0; // variavel acumuladora para armazenar a soma
  numeros.forEach((num) => {
    soma += num;
  });
  console.log(`Soma dos números: ${soma}`); // Soma dos números: 15
  ```


### localizar conteúdo

