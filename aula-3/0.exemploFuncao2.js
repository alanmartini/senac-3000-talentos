// Funções para controle de estoque

let estoqueTotal = 0; // Estoque inicial

// Função para adicionar ao estoque
function adicionarAoEstoque(valor) {
  estoqueTotal += valor;
  console.log(`Comprado: +${valor}. Estoque atualizado: ${estoqueTotal}`);
}

// Função para subtrair do estoque
function subtrairDoEstoque(valor) {
  estoqueTotal -= valor;
  console.log(`Vendido: -${valor}. Estoque atualizado: ${estoqueTotal}`);
}

// Função principal que recebe o array de transações
function atualizarEstoque(transacoes) {
  for (let i = 0; i < transacoes.length; i++) {
    const transacao = transacoes[i];
    const { precoProduto, status } = transacao;

    if (status === "compra") {
      adicionarAoEstoque(precoProduto);
    } else if (status === "venda") {
      subtrairDoEstoque(precoProduto);
    } else {
      console.log(`Status desconhecido: ${status}`);
    }
  }
}

// Exemplo de array de transações
const transacoes = [
  { precoProduto: 100, status: "compra" },
  { precoProduto: 50, status: "venda" },
  { precoProduto: 150, status: "compra" },
  { precoProduto: 30, status: "venda" },
];

// Chamada da função principal
atualizarEstoque(transacoes);

/*

// Função com callback
function somarComCallback(a, b, callback) {
  const resultado = a + b;
  callback(resultado); // Chama o callback passando o resultado
}

// Usando a função
somarComCallback(5, 3, function(resultado) {
  console.log('Resultado da soma com callback: ' + resultado); // Resultado da soma com callback: 8
});


*/
