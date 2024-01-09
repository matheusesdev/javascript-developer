const pessoa = {
    nome: 'Matheus',
    idade: 26,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
}
}


const atributo = `nome`;

console.log(pessoa[atributo]);