const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const listaDeNumeroPar = lista.filter((element, i, listRef) => {
  return element % 2 === 0;
});

console.log(lista);
console.log(listaDeNumeroPar);
