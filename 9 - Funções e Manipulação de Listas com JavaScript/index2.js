function adicao() {
  return x + y;
}
function multiplicacao() {
  return x * y;
}

function calculadora(x, operacao, y) {
  console.log(operacao, (x, y));
}

calculadora[(10, adicao, 20)];
calculadora[(10, multiplicacao, 20)];

document.getElementById(
  "btn1".addEventListener("click", () => {
    console.log("clicou");
  })
);
