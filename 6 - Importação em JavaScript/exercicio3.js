/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior numero par e o menor numero impar.
Exemplo:
Entrada 5, 3, 4 ,1 ,10, 8.
Saída: Maior número par: 10 // Menor número ímpar: 1 */

const { gets, print } = require("./funcoesauxiliaresex3.js");

const n = gets();

let maiorNumeroPar = 0;

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
}
print(maiorNumeroPar);
