function escrevaMeuNome (nome){
    return ('Seu nome é '  + nome);
}




function verificarIdade(idade){
    if (idade >= 18){
        console.log( escrevaMeuNome('Matheus')  + ' e você é maior de idade.')
    } else{
        console.log(escrevaMeuNome('Matheus') + ' e você é menor de idade.')
    }
}

verificarIdade(12)