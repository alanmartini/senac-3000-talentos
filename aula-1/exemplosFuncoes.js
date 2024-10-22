// ==============================================
// 1. Funções em JavaScript
// ==============================================

// Exemplo 1: Função Simples
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Ana")); // Saída: Olá, Ana!

// Exemplo 2: Arrow Function
const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4)); // Saída: 12

// Exemplo 3: Função com Parâmetros e Retorno
function calcularArea(largura, altura) {
  return largura * altura;
}

let area = calcularArea(5, 10);
console.log("Área: " + area); // Saída: Área: 50

// ==============================================
// 2. Escopo em JavaScript
// ==============================================

// Exemplo 1: Escopo Global vs Local
let cor = "vermelho"; // Variável global

function exibirCor() {
  let cor = "azul"; // Variável local (dentro da função)
  console.log(cor); // Saída: azul
}

exibirCor();
console.log(cor); // Saída: vermelho

// Exemplo 2: Escopo de Bloco (let e const)
if (true) {
  let nome = "Pedro"; // Escopo de bloco
  const idade = 20; // Escopo de bloco
  console.log(nome, idade); // Saída: Pedro 20
}

// console.log(nome);  // Erro: nome não está definido fora do bloco

// Exemplo 3: Closure
function criarContador() {
  let contador = 0; // Variável "preservada" no closure
  return function () {
    contador++;
    return contador;
  };
}

const contar = criarContador();
console.log(contar()); // Saída: 1
console.log(contar()); // Saída: 2
console.log(contar()); // Saída: 3
