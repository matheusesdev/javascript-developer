/* Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
1 - Preço do Combustível;
2 - Gasto Médio de combustível do carro por KM;
3 - Distância em KM da viagem; */

const  precoGasolina = 5.79; //Esta linha declara uma constante chamada precoGasolina e atribui a ela o valor de 5.79. Isso representa o preço da gasolina.
const gastoMedioPorLitro = 12; //Esta linha declara uma constante chamada gastoMedio e atribui a ela o valor de 10. Isso representa o consumo médio de gasolina de um veículo (quantos quilômetros ele pode percorrer com um litro de gasolina).
const distanciaEmKm = 1580; //Esta linha declara uma constante chamada distancia e atribui a ela o valor de 100. Isso representa a distância total que o veículo vai percorrer.

const valorViagem = (distanciaEmKm / gastoMedioPorLitro) * precoGasolina; //Esta linha declara uma constante chamada valorViagem. O valor dessa constante é calculado dividindo a distancia pelo gastoMedio (o que dá o total de litros de gasolina necessários para a viagem) e multiplicando pelo precoGasolina (o que dá o custo total da gasolina para a viagem). //Finalmente, esta linha imprime o valor da constante valorViagem no console. Isso representa o custo total da viagem. Portanto, este código calcula o custo total de uma viagem com base no preço da gasolina, no consumo médio de gasolina do veículo e na distância a ser percorrida.
console.log(valorViagem.toFixed(2));

