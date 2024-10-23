const https = require("https");

// Função para obter a cotação do USD para BRL usando Promise
function obterCotacao() {
  const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let dados = "";

        res.on("data", (pedaco) => {
          dados += pedaco;
        });

        res.on("end", () => {
          try {
            const resultado = JSON.parse(dados);
            const cotacaoUSD = resultado.USDBRL;
            resolve(cotacaoUSD);
          } catch (erro) {
            reject("Erro ao processar os dados: " + erro);
          }
        });
      })
      .on("error", (erro) => {
        reject("Erro ao fazer a requisição: " + erro);
      });
  });
}

// Chamando a função
obterCotacao()
  .then((cotacaoUSD) => {
    console.log(`Cotação atual do USD para BRL: R$ ${cotacaoUSD.bid}`);
    console.log(`Data da última atualização: ${cotacaoUSD.create_date}`);
  })
  .catch((erro) => {
    console.error(erro);
  });
