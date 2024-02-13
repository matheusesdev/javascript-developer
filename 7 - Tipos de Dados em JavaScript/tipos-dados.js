/* 

Tipos primitivos: um primitivo(valor primitivo, tipos de dados primitivos) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.

Boolean: um booleano é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso (true or false). Por exemplo, em javascript, condicionais booleanas são usadas para decidir quais trechos do código serão executados ou repetidos.

null: Um valor nulo representa uma referência que aponta, geralmente de maneira intencional, par um objeto ou endereço de memória inválido ou inexistente. O significado do valor nulo varia entre as implementações das linguagens.


undefined: Uma variável indefinida ou qualquer tipo de variável sem valor sempre retornará "undefined" em JavaScript.

number:É um tipo de dado numérico.

string: em qualquer linguagem de programação, uma string é uma sequência de caracteres usados para representar texto. Em javascript, uma string é um dos valores primitivos e o objeto string é um wrapper (uma função destinada a chamar uma ou mais funções, ás vezes diretamente por conveniência, e às vezes adaptá-las para fazer uma tarefa ligeiramente diferente no processo.) em cima do tipo primitivo string.

symbol: É uma função;

*/

//Boolean
if (condicao) {
  //código a executar se o booleano for true
}

if (10 > 0) {
  console.log("Booleano é verdadeiro");
} else {
  console.log("Booleano é falso");
}

// Null and Undefined - representam um tipo de ausência de valor, mas semânticamente são diferentes.
const x = { nome: null };
console.log(x.nome);
console.log(x.idade);
// null representa ausência de valor.
// undefined representa a inexistência.

//Formas de declarar texto(strings)
("texto"); // aspas duplas
("texto"); //aspas simples

//Objetos: São uma coleção dinâmica de chave e valor. Conseguimos acessar o valor diretamente ou através de uma chave.
const d = {
  nome: "matheus",
  idade: 30,
  cidade: "Vitória da Conquista",
  estado: "Bahia",
};

d["nome"] = "Maria";
d.sobrenome = "Santos"; //acrescentando elemento ao objeto
console.log(d.nome); //Acessar o atributo. d.idade, d.cidade, d.estado
console.log(d["nome"]);

//Atribuindo uma função ao objeto
d.falar = function () {
  console.log("Olá mundo");
};
d.falar();
