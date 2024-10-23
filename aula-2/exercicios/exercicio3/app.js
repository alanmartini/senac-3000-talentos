// Importando o módulo infoSistema.js
const obterInformacoes = require("./infoSistema");

// Obtendo as informações do sistema
const info = obterInformacoes();

// Imprimindo as informações no console
console.log("Informações do Sistema:");
console.log(`Sistema Operacional: ${info.sistemaOperacional}`);
console.log(
  `Memória Livre: ${(info.memoriaLivre / 1024 / 1024).toFixed(2)} MB`
); // Convertendo para MB
console.log(
  `Memória Total: ${(info.memoriaTotal / 1024 / 1024).toFixed(2)} MB`
); // Convertendo para MB
