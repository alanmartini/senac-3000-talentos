// Importando o módulo os do Node.js
const os = require("os");

// Função para obter informações do sistema
function obterInformacoes() {
  const info = {
    sistemaOperacional: os.platform(), // Nome do sistema operacional
    memoriaLivre: os.freemem(), // Memória livre em bytes
    memoriaTotal: os.totalmem(), // Memória total em bytes
  };
  return info;
}

// Exportando a função
module.exports = obterInformacoes;
