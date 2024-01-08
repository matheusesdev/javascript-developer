/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento: 
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoEtiqueta = 100; //Preço original do produto, sem desconto e adição.
const condPagamento = 4;

if (condPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.10));
} else if (condPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condPagamento === 3){
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));
}