console.log("Métodos comuns de arrays");

const nomes = ["João", "Maria", "Pedro"];

console.log("Adicionando um elemento ao final do array com push()");
nomes.push("Ana");
console.log(nomes);

/*
    function adicionarElemento(array, elemento) {
        array[array.length] = elemento;
        return array;
    }
*/

console.log("Removendo o último elemento do array com pop()");
const ultimoElemento = nomes.pop();
console.error(ultimoElemento);

/*
    function removerUltimoElemento(array) {
        const ultimoElemento = array[array.length - 1];
        array.length = array.length - 1;
        return ultimoElemento;
    }
*/

console.log(nomes);

console.log("Mapeando elementos do array com map()");
// itera por todos os elementos do array e transforma em maiusculas
const nomesMapeados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMapeados);

/*

    function mapear(array, funcao) {
        const novoArray = [];
        for (let i = 0; i < array.length; i++) {
            novoArray[i] = funcao(array[i]);
        }
        return novoArray;
    }

    const meusNumeros = [1, 2, 3, 4];
    const dobrados = mapear(meusNumeros, function(x) {
        return x * 2;
    });
    console.log(dobrados); // [2, 4, 6, 8]
*/

console.log("Filtrando elementos do array com filter()");
//retorna apenas nomes com mais de 5 letras
const nomesFiltrados = nomes.filter((nome) => nome.length > 5);
console.log(nomesFiltrados);

/*
    function filtrar(array, funcao) {
        const novoArray = [];
        for (let i = 0; i < array.length; i++) {
            if (funcao(array[i])) {
            novoArray.push(array[i]);
            }
        }
        return novoArray;
    }
    
    const meusNumeros = [1, 2, 3, 4, 5, 6];
    const pares = filtrar(meusNumeros, function(x) {
        return x % 2 === 0;
    });
    console.log(pares); // [2, 4, 6]
*/

console.log("Reduzindo elementos do array com reduce()");
const soma = nomes.reduce((contador, nome) => contador + nome.length, 0);
console.log(soma);

/*
    function somaTamanhosNomes(nomes) {
        let soma = 0;
        for (let nome of nomes) {
            soma += nome.length;
        }
        return soma;
    }

    const somatorio = somaTamanhosNomes(nomes);
    console.log(soma);
*/
