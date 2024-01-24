/*Hoisting é um conceito no qual a declaração de variáveis e funções são "levantadas" para o topo do escopo atual em JavaScript.
Isso ocorre porque a declaração de variáveis e funções são movidas para o topo do escopo atual pelo processo de hosting. A inicialização da variável, por outro lado, permanece no mesmo lugar.
*/

//Exemplo 1: declaração de variável.
console.log(x); // undefined
var x = 10;
console.log(x); // 10
/* No exemplo acima, a declaração de variável x é movida para o topo do escopo atual.
Isso faz com que o valor de x seja inicializado como undefined antes de atribuir o valor 10. */
