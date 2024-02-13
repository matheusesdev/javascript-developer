/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar o percurso.
*/

class Carros{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedio * precoCombustivel
    }
}



const palio = new Carros('Fiat', 'Prata', 1/12);
console.log(palio.calcularGastoDePercurso(70, 5))

const camaro = new Carros('Chevrolet', 'Vermelho', 1/5);
console.log(camaro.calcularGastoDePercurso(70, 5));


