/* Var: é a maneira mais antiga de declara variáveis em JS. As variáveis declaradas com var são hoisted (ou seja, movidas para o topo do escopo) e podem ser redeclaradas. Elas têm escopo de função, o que significa que se vocÊ declara uma variável com var dentro de uma função, ela não está disponível fora dessa função */
function teste() {
  var x = 10;
  console.log(x); // 10
}
console.log(x); // x is not defined

/* Let: Introduzido no ES6, let tem escopo de bloco, o que significa que a variável só está disponível dentro do bloco em que foi declarada. As variáveis com let também são hoisted, mas não são inicializadas como undefined como var. Tentar acessar uma variável let antes da sua declaração resultará em um erro de ReferenceError*/
if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // y is not defined

/* 

 */