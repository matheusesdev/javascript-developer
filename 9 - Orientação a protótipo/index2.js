const pessoa = {
  genero: "masculino",
};

const matheus = Object.create(pessoa);
matheus.nome = "Matheus";

console.log(matheus.genero);
