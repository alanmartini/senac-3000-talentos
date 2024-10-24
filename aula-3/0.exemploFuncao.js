function buscaNome() {
  let meuNome = "Joaquim";

  exibeNome(meuNome);
}

function exibeNome(nome) {
  console.log("Nome :", nome);
}

buscaNome();

// Diferença de void function e return function

const saudar = function () {
  const horaAtual = new Date().getHours();
  if (horaAtual <= 12) return "Bom dia";
  if (horaAtual <= 18) return "Boa tarde";
  return "Boa noite";
};

console.log(saudar());
