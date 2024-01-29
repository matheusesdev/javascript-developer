// Existem três formas de declarar variáveis em JavaScript
// Variáveis: são declaradas usando a palavra-chave "var"
// Constantes:  Elas são declaradas usando a palavra-chave "const". O valor de uma constante não pode ser alterado.
// É importante notar que, nas versões mais recentes do JavaScript, o uso de "var" é desencorajado em favor de "let" e "const", pois "var" possui algumas peculiaridades em relação ao escopo de variáveis que podem levar a erros.

// Aqui, uma variável chamada var1 é declarada e atribuída o valor 10
var var1 = 10;

// Aqui, uma variável chamada var2 é declarada e atribuída a string "20"
var var2 = "20";

// Aqui, o valor de var1 é subtraído do valor de var2 e o resultado é exibido no console.
// Como var2 é uma string, JavaScript tentará converter essa string em um número para realizar a operação.
// Se a string não puder ser convertida em um número, o resultado será NaN (Not a Number).
console.log(var1 - var2);
