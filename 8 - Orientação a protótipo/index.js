/*
Este trecho de código em Javascript está demonstrando o conceito de protótipos e herança de propriedades. 
Primeiro, um objeto chamado pessoa é criado com uma propriedade idade definida como 18.
Em seguida, um segundo objeto chamado matheus é criado. Este objeto tem três propriedades: nome, idade e __proto__. A propriedade nome é definida como "Matheus" e a propriedade idade é definida como 26. A propriedade ___proto__ é usada para definir o protótipo do objeto matheus como sendo o objeto pessoa. Isso significa que matheus herda todas as propriedades do objeto pessoa.
No entanto, como o objeto matheus já tem uma propriedade idade definida, ele não herda a propriedade idade do objeto pessoa. Em vez disso, a propriedade idade do objeto matheus oculta a propriedade idade do objeto pessoa.
Finalmente, o código imprimi a propriedade idade do objeto matheus, que é 26. Se a propriedade idade não estivesse definida no objeto matheus, o JavaScript procuraria essa propriedade no protótipo do objeto, que é o objeto pessoa e imprimiria 18.
*/
const pessoa = {
  idade: 18,
};

const matheus = {
  nome: "Matheus",
  idade: 26,
  __proto__: pessoa,
};

console.log(matheus.idade);
