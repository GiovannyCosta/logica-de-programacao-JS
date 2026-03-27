# 💻 Lógica de Programação e Algoritmos com JavaScript

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Repositório dedicado aos estudos de lógica e resolução de exercícios na linguagem javascript, usando como principal base o livro **"Lógica de Programação e Algoritmos com JavaScript - 2ª Edição"**, de Edécio Fernando Iepsen.

## 🚀 Área de Uso e Dependências

Este projeto foi construído para explorar a lógica de programação em dois ambientes distintos de execução do JavaScript:

- **Ambiente Web (Navegador):** Exercícios que envolvem a manipulação do DOM e a criação de interfaces interativas utilizando HTML e CSS.
- **Ambiente de Terminal (Backend):** Algoritmos focados em lógica pura executados localmente através do Node.js.

### 📦 Dependências

- **[Node.js](https://nodejs.org/)**: Necessário para rodar os scripts pelo terminal.
- **[prompt-sync](https://www.npmjs.com/package/prompt-sync)**: Biblioteca utilizada para permitir e capturar a entrada de dados do utilizador diretamente no terminal durante a execução dos ficheiros via Node.js.

**Instalação:**
Para testares os ficheiros de terminal localmente, navega até à pasta do projeto e instala as dependências utilizando o comando:

```bash
npm install
```

## 📂 Capítulo 1: Introdução

Neste capítulo inicial, foquei nos fundamentos essenciais da linguagem:

- Operadores aritméticos e lógica de cálculo.
- Entrada e saída de dados (prompt e alert).
- Manipulação de variáveis e tipos de dados.
- **Coerção de tipos:** Entender como o JavaScript converte strings em números (e os cuidados necessários com o operador `+`).

### 🛠 Prática

Os exercícios de fixação foram implementados no ficheiro `exCap1.js`.

---

## 📂 Capítulo 2: Integração com HTML (DOM)

Neste capítulo, o foco foi a interação com o navegador:

- **Manipulação do DOM:** Uso de `document.querySelector` e `innerText`.
- **Eventos:** Escuta de formulários com `addEventListener("submit", ...)`.
- **Métodos Math:** Aplicação de `Math.floor`, `Math.ceil` e arredondamentos.
- **Formatação:** Uso de `toFixed(2)` e `toLocaleString` para moedas.

### 🛠 Prática

O arquivo `exercicios.js` controla a lógica da página `index.html`:

1.  **Cine Alinas:** Conversão de minutos em Horas e Minutos.
2.  **Revenda de Veículos:** Cálculo de entrada (50%) e parcelamento.
3.  **Farmácia:** Promoção "Leve 2" com arredondamento de valores

Os exercícios de fixação foram implementados na pasta `/cap-2`.

| Exercícios do livro | Exercícios de fixação |
| ------------------- | --------------------- |
| `/exercicios`       | `/exCap2`             |

---

## 📂 Capítulo 3: Node.js e Entrada de Dados (Terminal)

Neste capítulo, a interação passou para o terminal:
Transição do navegador para o ambiente backend (terminal).

- **Ferramentas:** Uso da biblioteca `prompt-sync` para interação.
- **Lógica:** Resolução de problemas sem interface gráfica.
- **Conceitos:**
  - Conversão de tipos (`Number()`).
  - Operador Módulo (`%`) para calcular restos.
  - `Math.floor()` para divisões inteiras.

### 🛠 Prática

Os exercícios de fixação foram implementados no ficheiro `cap-3/exercicios.js`.

- **Cálculo de Revenda:** Lógica para cálculo de entrada (50%) e parcelamento de veículos.
- **Consumo de Ração:** Cálculo de duração de um saco de ração em dias e a sobra exata em gramas.
- **Calculadora simples:** Uma introdução rápida de calculadora

---

## 📂 Capítulo 4: Estruturas Condicionais (If/Else)

Introdução à tomada de decisão no código.

- **Estruturas:** `if`, `else if`, `else` e `switch`.
- **Operadores Lógicos:** `&&` (E), `||` (OU), `!` (NÃO).

### estilo

- **Estilização Dinâmica:** Alteração de cor (`style.color`) baseada na condição (Aprovado/Reprovado).

### 🛠 Prática

- **Situação do Aluno:** Sistema que verifica média e define status (Aprovado/Recuperação/Reprovado).
- **Calculadora Node:** Uso de `switch` para selecionar operações matemáticas (+, -, \*, /).
- **Exercícios Rápidos:** Verificação de Par/Ímpar e Fuso Horário.

---

## 📂 Capítulo 5: Estruturas de Repetição (Loops)

Neste capítulo, o foco foi a automação de tarefas repetitivas e o controle de fluxo de execução, tanto no navegador quanto no terminal.

- **Laços de Repetição:**
  - `for`: Ideal para quando o número de repetições é conhecido (ex: tabuadas).
  - `while`: Teste lógico no início, usado quando não sabemos quantas vezes repetir.
  - `do-while`: Teste lógico no final, garantindo pelo menos uma execução (útil para validações).
- **Controle de Fluxo:** Uso de `break` para interromper laços e `continue` para pular iterações.
- **Lógica de Dados:**
  - **Acumuladores:** Variáveis que somam valores (ex: total de contas a pagar).
  - **Contadores:** Variáveis que incrementam passos (ex: número de itens).
  - **Validação:** Tratamento de entradas inválidas (`isNaN`) e loops infinitos controlados.

### 🛠 Prática

A pasta `/cap-5` foi organizada separando a lógica de interface (DOM) dos scripts de backend (Node.js):

#### 🌐 Navegador (DOM)

O arquivo `conceitos.js` controla a interatividade da página `index.html`:

1.  **Tabuada Dinâmica:** Gera a tabuada completa de qualquer número.
2.  **Contas do Mês:** Sistema que acumula valores inseridos e exibe o montante total (uso de acumuladores).
3.  **Fábrica de Estrelas:** Criação de padrões visuais alternando caracteres com lógica par/ímpar.
4.  **Números Decrescentes:** Uso de laço `for` reverso (`i--`).

#### 🖥️ Terminal (Node.js)

Os arquivos `nodeConceitos.js` e `excCap5.js` focam na lógica pura:

1.  **Criação de Chinchilas:** Cálculo de progressão geométrica (população triplicando) com validação de entrada via `do-while`.
2.  **Anos de Copa:** Verificador que ignora anos específicos (Segunda Guerra) usando lógica condicional dentro do loop.
3.  **Verificador de Primos:** Algoritmo de força bruta para identificar números primos.
4.  **Repetição de Caracteres:** Uso de `process.stdout.write` para saídas na mesma linha.

| Arquivo            | Descrição                                          |
| :----------------- | :------------------------------------------------- |
| `teoria.js`        | Base teórica e sintaxe das estruturas.             |
| `conceitos.js`     | Exercícios visuais integrados ao HTML.             |
| `nodeConceitos.js` | Exemplos rápidos de lógica no terminal.            |
| `excCap5.js`       | Resolução dos desafios finais do capítulo (Livro). |

---

<p align="center">
    Desenvolvido com dedicação por <strong>Giovanny Reizon</strong>.
</p>
