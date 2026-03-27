## CAPÍTULO 1: FUNDAMENTOS E ENTRADA DE DADOS

- O javascript possui tipagem dinâmica, permitindo que variáveis armazenem textos (String) ou números (Number) de forma simples.

- Exemplos de variáveis:

```javascript
const texto = "20"; // String (texto)
const numero = 2; // Number (número)
```

### coerção de tipos

> o javascript tenta converter strings em números automaticamente para realizar operações matemáticas como multiplicação (`*`), divisão (`/`) e subtração (`-`).

```javascript
console.log("Multiplicação:", texto * numero); // 40 (Funciona)

console.log("Divisão:", texto / numero); // 10 (Funciona)

console.log("Subtração:", texto - numero); // 18 (Funciona)
```

> **`importante`:** o sinal de `+` serve para SOMAR e CONCATENAR (juntar).<br>
> se houver uma string, a linguagem prefere concatenar.

```javascript
console.log("Adição (Concatenação):", texto + numero); // "202" (Texto)
```

- conversão explícita: sempre use `Number()` quando ler dados do usuário para garantir que a matemática ocorra da forma correta.

```javascript
console.log("Adição Correta:", Number(texto) + numero); // 22 (Número)
```

### entrada e saída (node.js vs navegador)

- no navegador usamos: `alert("Olá")` e `prompt("Digite algo")`.
- no Node.js precisamos da biblioteca `prompt-sync`.

```javascript
const prompt = require("prompt-sync")(); // Importa e ativa a biblioteca
const nome = prompt("Qual seu nome? ");
console.log(`Olá, ${nome}!`); // Template String (uso de crase ` `)
```

### string tradicional e template string

- strings tradicionais são delimitadas por aspas simples (`'`) ou aspas duplas (`"`).

```javascript
const nomeString = "Mundo";
const saudacao = "Olá, " + nomeString + "!";
console.log(saudacao);
// Saída: Olá, Mundo!
```

- template strings são delimitadas por acentos graves (`` ` ``).<br>
- interpolação: permite embutir variáveis e expressões diretamente na string usando a sintaxe `${expressao}`.<br>
- deixa o código mais limpo e fácil de ler.

```javascript
const nomeTemplate = "Mundo";
const saudacaoTemplate = `Olá, ${nomeTemplate}!`; // Mais limpo e fácil de ler
// Saída: Olá, Mundo!
```

### método de arredondamento tofixed

- bônus `toFixed(valor de casas)`: arredonda um número para `n` casas decimais.

```javascript
const num = 3.14159;
console.log("valor arredondado: ");
console.log(num.toFixed(2)); // 3.14
```