// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(f) {
  return ((f - 32) * 5) / 9;
}

// Função para converter metros para quilômetros
function metrosParaKilometros(m) {
  return m / 1000;
}

// Exportando as funções
module.exports = {
  fahrenheitParaCelsius,
  metrosParaKilometros,
};
