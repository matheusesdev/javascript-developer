// Hoisting é um comportamento padrão do JavaScript de mover declarações para o topo do escopo atual (do script ou função). Isso significa que você pode usar variáveis e funções antes mesmo de serem declaradas.

// Existem duas coisas importantes para entender sobre o hoisting:

// 1. Apenas a declaração é movida para o topo, não a inicialização. Se a variável for inicializada após a utilização, seu valor será `undefined`.

console.log(x); // undefined
var x = 10;
console.log(x); // 10


//No exemplo acima, a declaração `var x` é "hoisted", ou seja, movida para o topo do escopo. Então, quando o primeiro `console.log(x)` é executado, `x` já existe no escopo, mas ainda não foi inicializado, resultando em `undefined`.

//2. O hoisting se comporta de maneira diferente com `let` e `const` em comparação com `var`. Enquanto `var` é hoisted e inicializado com `undefined`, `let` e `const` são hoisted mas não inicializados. Se você tentar acessar uma variável `let` ou `const` antes da declaração, receberá um erro de ReferenceError.


console.log(y); // ReferenceError: y is not defined
let y = 10;


// No exemplo acima, embora `y` seja hoisted, ele não é inicializado, então o JavaScript lança um erro quando tentamos acessá-lo antes de sua declaração.