/*First Class Functions: Funções de primeira classe são um conceito fundamental em linguagens de programação que tratam funções como cidadãos de primeira classe. Isso significa que, em tais linguagens, funções podem ser manipuladas da mesma maneira que qualquer outro tipo de dado.
Elas podem ser: 
1. Atribuídas a variáveis: let minhaFuncao = function(){}
2.Passadas como argumentos para outras funções: outraFuncao(minhaFuncao)
3. Retornadas por outras funções: function(criarFuncao){ return function(){...}}
4. Armazenadas em estruturas de dados, como objetos ou arrays: let obj = {minhaFuncao: function(){...}}
*/
/* Esse trecho de código representa um conceito de funções de primeira classe. Primeiro, uma função chamada falarMeuNome é declarada.
Essa função, quando chamada, imprime uma string "Meu nome é Matheus" no console.
Em seguida, uma constante chamada referenciaNova é declarada e atribuída à função falarMeuNome. Isso é possível porque, em JavaScript, funções são cidadãos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos para outras funções, e podem ser retornadas por outras funções.
Finalmente, a função falarMeuNome é chamada através da constante referenciaNova. Isso demonstra que a constante referenciaNova agora detém uma referência à função falarMeuNome, e pode ser usada para invocar essa função. Quando referenciaNova() é executada, ela imprime "Meu nome é Matheus" no console, assim como a função falarMeuNome faria.
*/

// function falarMeuNome() {
//   console.log("Meu nome é Matheus");
// }

// const referenciaNova = falarMeuNome;
// referenciaNova();

//Outro exemplo
function falarMeuNome() {
  console.log("Meu nome é Matheus");
}
function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome();
  console.log("Espírito Santo dos Santos");
  return falarMeuNome;
}
falarMeuNomeCompleto(falarMeuNome);

//Formas de declarar funções:

//1. Esta é a maneira mais comum de declarar uma função. A função é definida usando a palavra-chave function, seguida pelo nome da função, parênteses para parâmetros e chaves para o corpo da função.
function nomeDaFuncao() {}
//2. Uma função também pode ser definida como uma expressão de função. Neste caso, a função é atribuida a uma variável. A função em si pode ser anônima(sem nome)
const nomeDeOutraFuncao = function () {};
//3. Arrow Function: as funções de seta são uma adição mais recente ao JavaScript com ES6. Ela têm uma sintaxe mais curta e tratam o "this" de maneira diferente das funções normais.
const minhaFuncao1 = () => {
  //corpo da função
};

// Higher Order Functions
