/* Formula IMC: 
 
IMC = peso / (altura*altura).

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 E 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade Grave;
*/

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc){
    if (imc < 18.5) {
      return("Abaixo do peso.");
    } else if (imc >= 18.5 && imc < 25) {
      return("Peso normal");
    } else if (imc >= 25 && imc < 30) {
      return("Acima do peso");
    } else if (imc >= 30 && imc < 40) {
      return("Acima do peso");
    } else {
      return("Obesidade grave");
    }
}


//Será sempre o código principal. 
(function (){
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})()

main = function(){
  console.log(1); 
}





