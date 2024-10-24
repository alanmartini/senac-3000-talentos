async function myFunction() {
  return "Hello";
}
// é a mesma coisa que:
function myFunction() {
  return Promise.resolve("Hello");
}

function mostraNome(nome) {
  console.log("Nome:", nome);
}

async function minhaFuncao() {
  return "Hello";
}
minhaFuncao().then(function (value) {
  mostraNome(value);
});
