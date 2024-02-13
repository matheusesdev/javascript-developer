const pessoa = {
  nome: "matheus",
  idade: 20,
};

function gritar(prefixo) {
  console.log(prefixo, this.nome);
}

gritar.apply(pessoa, ["Olá!!!!!"]);
gritar.call(pessoa, "Olá!!!!!!!!!!!!!!!!!!!");


