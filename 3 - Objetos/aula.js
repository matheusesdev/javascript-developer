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


function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const matheus = new Pessoa('Matheus', 22);
const maria = new Pessoa('Maria', 33);

compararPessoas(matheus, maria);