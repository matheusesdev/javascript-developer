class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

const lista = [new Pessoa("Matheus"), new Pessoa("Maria"), new Pessoa("John")];

const listaEmHtml = lista.map((element) => {
  return `
 <li>
 ${element.name}
 </li>
`
});

console.log(listaEmHtml);
