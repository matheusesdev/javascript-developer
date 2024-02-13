function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é:${this.nome}`);
};

const matheus = {
  genero: "masculino",
};

Pessoa.call(matheus, "nome", 26);

console.log(matheus);

