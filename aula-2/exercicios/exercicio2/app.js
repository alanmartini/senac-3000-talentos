// Importando os módulos
const matematica = require("./matematica");
const conversao = require("./conversao");

// Testando as funções de matemática
const numero = 3;
console.log(`Quadrado de ${numero}: ${matematica.quadrado(numero)}`); // Resultado: 9
console.log(`Cubo de ${numero}: ${matematica.cubo(numero)}`); // Resultado: 27

// Testando as funções de conversão
const fahrenheit = 100;
console.log(
  `${fahrenheit}°F em Celsius: ${conversao
    .fahrenheitParaCelsius(fahrenheit)
    .toFixed(2)}°C`
); // Resultado: 37.78°C

const metros = 5000;
console.log(
  `${metros} metros em quilômetros: ${conversao.metrosParaKilometros(
    metros
  )} km`
); // Resultado: 5 km
