const pessoas = require("./pessoas");

//des-estruturando
// const { nome, idade, saudacao, multiplicar } = require("./pessoas");

console.log(pessoas);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Quem é você? ", (name) => {
  console.log(`Inserido Nome ${name}!`);
  pessoas.saudacao(name);
  readline.close();
});
