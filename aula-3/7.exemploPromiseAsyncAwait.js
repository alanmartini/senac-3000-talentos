// Função que retorna uma Promise com um atraso
function promessaComDelay(numero, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0) {
        resolve(numero * 2);
        console.log("Trabalhando com o número:", numero);
      } else {
        reject("O número deve ser maior que zero!");
      }
    }, delay);
  });
}

// Usando async/await
async function executarPromessas() {
  try {
    const resultado1 = await promessaComDelay(5, 7000);
    console.log("Resultado da primeira promessa:", resultado1);
    const resultado2 = await promessaComDelay(10, 3000);
    console.log("Resultado da segunda promessa:", resultado2);
    const resultado3 = await promessaComDelay(15, 1000);
    console.log("Resultado da terceira promessa:", resultado3);
  } catch (erro) {
    console.log("Erro capturado:", erro);
  }
}

executarPromessas();
