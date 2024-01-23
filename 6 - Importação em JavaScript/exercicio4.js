/* Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: valor bruto do salário - percentual de imposto mediante a faixa salarial + adição dos benefícios.

Para calcular o percentual de impostos segue as aliquotas:

De R$0.00 a R$1.100.00 = 5.00%
De R$1.100.01 a R$ 2.500.00 = 10%
Maior que R$2.500.00 = 15%  

Entrada: R$2.000 + R$250 de benefícios //Tira os 10%

Saída: R$2.050 */

const { gets, print } = require("./funcoes-auxiliaresex4");

const valorSalarioBruto = gets();
const valorAdicionalBeneficios = gets();
