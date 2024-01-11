class Pessoa { // Classe é a definição do que deve ser o  objeto
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){ //Constructor é o que acontece quando algo é instanciado.
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
     descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, e meu ano de nascimento é ${this.anoDeNascimento}.`)
    }
}
const matheus = new Pessoa('Maria', 27); // Instância é uma ocorrência daquele objeto.
const joao = new Pessoa('Clebson', 22);



console.log(matheus)