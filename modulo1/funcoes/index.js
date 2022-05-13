//----------EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO------------

// ----------------------EXERCÍCIO 1-------------------------

// Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

//Resposta: Será impresso na tela os valores: 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
// O que apareceria no console?

//Resposta não iria aparecer nenhuma saída com o resultado da função


// -----------------  EXERCÍCIO 2 ------------------------

// Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

//RESPOSTA: Essa função irá solicitar um texto ao usuário
//Caso o usuário digite uma frase que contenha o bloco de caracteres que forma "cenoura", irá imprimir como resposta true
//Caso o usuário digite uma frase que não contenha o bloco de caracteres "cenoura", irá retornar a mensagem de false

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` irá ter como saída true
//      ii.  `CENOURA é bom pra vista` -> irá ter como saída true
//      iii. `Cenouras crescem na terra` -> irá ter como saída true

//i. 'Eu gosto de cenoura' irá retornar true
//ii. '

// ----------- EXERCÍCIO DE ESCRITA DE CÓDIGO ---------------


// ------------------ EXERCÍCIO 1 --------------------------

//Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

function dados(){

    const info = console.log("Oi eu sou o Fernando, tenho 34 anos, moro em Belo Horizonte e sou estudante")

    return info

}

dados() 

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//EXEMPLO:

//Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

function biografia(nome, idade, endereco, profissao) {

const concatenado = console.log(`Eu sou, ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)

return concatenado

}

const bio2 = biografia(prompt("Informe o seu nome"), prompt("Informe a sua idade"), prompt("Informe a sua cidade"), prompt("Informe a sua profissão"))


// ------------------- EXERCÍCIO 2 -------------------------

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

function doisNumeros(numero1, numero2) {

const primeiroValor = Number(prompt("Digite um numero"))
const segundoValor = Number(prompt("Digite outro número"))

const valor = primeiroValor + segundoValor

return valor
}

console.log(doisNumeros())


// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function numeros(numero3, numero4) {

    const valor1 = Number(prompt("Digite um numero"))
    const valor2 = Number(prompt("Digite outro número"))
    
    var booleano = new Boolean(valor1 > valor2)

    return booleano
    
    
    }
    
    console.log(numeros())

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeros2(numero5) {

    const valor3 = Number(prompt("Digite um numero par"))
        
    var booleano2 = new Boolean(valor3 % 2, 0)
    

    return booleano2
    
    
    }
    
    console.log(numeros2())

//NAO CONSEGUI

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//NAO CONSEGUI


// ----------------- EXERCÍCIO 3 -----------------------------

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
//Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

// EXERCÍCIO 3 --------------------------->

const numeroUsuario = Number(prompt("Escreva um número:"))

const numeroUsuario2 = Number(prompt("Escreva outro número:"))

console.log("Números inseridos:", numeroUsuario, "e", numeroUsuario2)

function soma(conta) {

    const somar = numeroUsuario + numeroUsuario2
    return somar
}

function subtrair(conta2) {

    const subtracao = numeroUsuario - numeroUsuario2
    return subtracao
}

function dividir(conta3) {

    const divisao = numeroUsuario / numeroUsuario2
    return divisao
}

function multiplicar(conta4) {

    const multiplicacao = numeroUsuario * numeroUsuario2
    return multiplicacao
}

let contaAdicao = soma()
let contaSubtracao = subtrair()
let contaDivisao = dividir()
let contaMultiplicar = multiplicar()

console.log("Soma:", contaAdicao)
console.log("Diferença:", contaSubtracao)
console.log("Multiplicação:", contaMultiplicar)
console.log("Divisão:", contaDivisao)

