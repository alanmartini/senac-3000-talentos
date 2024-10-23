// Função que retorna uma Promise com um atraso
function promessaComDelay(numero, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0) {
        console.log("execução número " + numero);
        resolve(numero * 2);
      } else {
        reject("O número deve ser maior que zero!");
      }
    }, delay);
  });
}

// Usando Promise.all
const promessas = [
  promessaComDelay(5, 7000),
  promessaComDelay(10, 3000),
  promessaComDelay(15, 1000),
];

Promise.all(promessas)
  .then((resultados) => {
    console.log("Resultados de todas as Promises:", resultados);
  })
  .catch((erro) => {
    console.log("Erro capturado em uma das Promises:", erro);
  });
