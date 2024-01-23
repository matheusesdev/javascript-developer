/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior numero par e o menor numero impar.
Exemplo:
Entrada 5, 3, 4 ,1 ,10, 8.
Saída: Maior número par: 10 // Menor número ímpar: 1 */

const { gets, print } = require("./funcoesauxiliaresex3.js");

const n = gets(); //Aqui eu recebo o número de valores
let maiorNumeroPar = null; //Aqui eu tenho o maior número par, que ainda não sei qual o valor
let menorNumeroImpar = null; //Aqui eu tenho o menor número ímpar, que eu ainda não sei o valor.

for (let i = 0; i < n; i++) {
  //Aqui eu vou percorrer o trecho de códigos N vezes, por que é a quantidade de números que vai ser informada. E cada vez vai pegar um número novo para avaliar.
  const numero = gets();

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print("Maior número par é: " + maiorNumeroPar);
print("O menor número ímpar é: " + menorNumeroImpar);
