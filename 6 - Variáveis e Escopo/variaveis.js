// Existem três formas de declarar variáveis em JavaScript
// Variáveis: são declaradas usando a palavra-chave "let".
// Constantes:  Elas são declaradas usando a palavra-chave "const". O valor de uma constante não pode ser alterado. Ele se restringe ao escopo de bloco.
// É importante notar que, nas versões mais recentes do JavaScript, o uso de "var" é desencorajado em favor de "let" e "const", pois "var" possui algumas peculiaridades em relação ao escopo de variáveis que podem levar a erros.

// Aqui, uma variável chamada let1 é declarada e atribuída o valor 10
let let1 = 10;

// Aqui, uma variável chamada let2 é declarada e atribuída a string "20"
let let2 = "20";

// Aqui, o valor de var1 é subtraído do valor de var2 e o resultado é exibido no console.
// Como var2 é uma string, JavaScript tentará converter essa string em um número para realizar a operação.
// Se a string não puder ser convertida em um número, o resultado será NaN (Not a Number).
console.log(let1 - let2);
