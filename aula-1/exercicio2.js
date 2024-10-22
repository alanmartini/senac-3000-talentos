/*
Exercício 2) Conferência de Descontos
Crie uma lógica que determine se uma loja pode aplicar desconto em uma compra. O desconto será aplicado se:

O valor total for maior que R$ 100
O cliente é membro do clube da loja ou tem um cupom de desconto.

*/
let valorCompra = 120;
let membroDoClube = false;
let temCupom = true;

// Verifique se o cliente tem direito ao desconto
if (valorCompra > 100 && (membroDoClube || temCupom)) {
  console.log("Desconto aplicado!");
} else {
  console.log("Sem direito ao desconto.");
}
