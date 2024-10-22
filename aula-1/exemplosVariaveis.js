// ==============================================
// 1. Operador Lógico E (&&)
// ==============================================

let idade = 25;
let possuiHabilitacao = true;

// Ambas as condições devem ser verdadeiras
if (idade >= 18 && possuiHabilitacao) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}
// Saída: Pode dirigir.

let tempo = "ensolarado";
let temperatura = 30;

if (tempo === "ensolarado" && temperatura > 25) {
  console.log("É um ótimo dia para um piquenique!");
} else {
  console.log("Melhor ficar em casa.");
}
// Saída: É um ótimo dia para um piquenique!

// ==============================================
// 2. Operador Lógico OU (||)
// ==============================================

let temCarro = false;
let temMoto = true;

// Pelo menos uma condição deve ser verdadeira
if (temCarro || temMoto) {
  console.log("Tem como se locomover.");
} else {
  console.log("Não tem meio de transporte.");
}
// Saída: Tem como se locomover.

let diaSemana = "sábado";

if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("É fim de semana!");
} else {
  console.log("É um dia útil.");
}
// Saída: É fim de semana!

// ==============================================
// 3. Operador Lógico NÃO (!)
// ==============================================

let estaChovendo = true;

// Negação da condição
if (!estaChovendo) {
  console.log("O tempo está bom, não está chovendo.");
} else {
  console.log("Está chovendo.");
}
// Saída: Está chovendo.

let temAcesso = false;

if (!temAcesso) {
  console.log("Acesso negado.");
} else {
  console.log("Acesso permitido.");
}
// Saída: Acesso negado.

// ==============================================
// 4. Combinação de Operadores Lógicos (&& e ||)
// ==============================================

idade = 20;
let temCarteira = false;
let temPermissaoEspecial = true;

// Precisa ter carteira ou permissão especial, e ser maior de 18
if ((temCarteira || temPermissaoEspecial) && idade >= 18) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}
// Saída: Pode dirigir.

// ==============================================
// 5. Avaliação Curta-Circuito com && e ||
// ==============================================

// Avaliação com &&
let valor = false && "Isso não será avaliado";
console.log(valor); // false

// Avaliação com ||
valor = true || "Isso não será avaliado";
console.log(valor); // true
