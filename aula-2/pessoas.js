// Exportando variáveis e funções
const nome = "João";
const idade = 30;

function saudacao(nome) {
  console.log(`Olá da função saudação!, ${nome}!`);
  //return `Olá, ${nome}!`;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

module.exports = {
  nome,
  idade,
  saudacao,
  multiplicar,
};
