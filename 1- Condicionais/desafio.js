/* Faça um programa para calcular o valor de uma viagem.

VocÇe terá 3 variáveis. Sendo elas:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 6.66;
const precoGasolina = 5.79;
const gastoMedioPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / gastoMedioPorLitro;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
