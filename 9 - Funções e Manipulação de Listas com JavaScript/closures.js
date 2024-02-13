function soma(x) {
  return function (y) {
    return x + y;
  };
}

const somaParcia = soma(10);

console.log(somaParcia(20));
console.log(somaParcia(30));
console.log(somaParcia(40));
