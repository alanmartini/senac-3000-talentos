// Simulando uma operação assíncrona, como uma chamada de API
function obterDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // Mude para false para simular um erro
      if (sucesso) {
        resolve("Dados recebidos com sucesso!");
      } else {
        reject("Falha ao obter os dados!");
      }
    }, 2000);
  });
}

// Usando async/await sem try...catch
async function executar() {
  console.log("Iniciando a operação...");

  // Aguardando a resolução da Promise
  const resultado = await obterDados();

  console.log(resultado); // Este código só é executado se a Promise for resolvida
}

// Chamando a função async com tratamento de erro externo
executar()
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(() => {
    console.log("Operação concluída.");
  });

async function runProcess() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
  //json.map((item) => console.log(item.title));
}

runProcess();
