//--------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO------------
// Tente responder os exercícios dessa seção sem executar o 
// código. Se ficar muito difícil, pode rodar no seu 
// computador para analisar e pensar sobre o resultado. 

//-------------------EXERCÍCIO 1-------------------------

// O que o código abaixo está fazendo? 
// Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//RESULTADO:
//O resultado no console será 10, o valor está definido para
//começar como 0, cada vez que passar no for ele vai acrescentar
//1 depois o valor mais o novo i
//ou seja se ir passar 1x: sera 0+1=1
//na segunda ida do total de 5 será 1+1


//-------------------EXERCÍCIO 2-------------------------

// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?

// será impresso 19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o índice de cada elemento dessa 
// lista, o for...of... é suficiente? 
// Se sim, o que poderia ser usado para fazer isso?

//-------------------EXERCÍCIO 3-------------------------

// Qual seria o resultado impresso no console, 
// se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//RESULTADO:
//*
//**
//***
//****

//------------EXERCÍCIOS DE ESCRITA DE CÓDIGO---------------

//-------------------EXERCÍCIO 1-------------------------

// Pergunte ao usuário quantos bichinhos de estimação ele 
// tem e guarde esse dado em uma variável. 


// a) Se a quantidade for 0, imprima no console 
// "Que pena! Você pode adotar um pet!"


// b) Se a quantidade for maior que 0, 
// solicite que o usuário digite os nomes deles, 
// um por um, e guarde esses nomes em um array
 

// c) Por fim, imprima o array com os nomes dos bichinhos 
// no console

const animais = Number(prompt('Quantos animais você possui?'))


if(animais === 0){
    console.log("Que pena! Você pode adotar um pet!")
} 

if(animais > 0){
    const listaDeBichos = []
    for(let i=0; i<animais; i++){
        const animaisDoUsuario = prompt('Digite o nome do seu pet:')
        listaDeBichos.push(animaisDoUsuario)
    }
    console.log(listaDeBichos)

}




//-------------------EXERCÍCIO 2-------------------------

// Considere que você tenha acesso a um array  
// (chamado de 'array original') que é composto somente de 
// números. Baseando-se nisso, crie uma função para cada um 
// dos itens abaixo, realizando as operações pedidas:


// a) Escreva um programa que imprime cada um dos valores do 
// array original.


// b) Escreva um programa que imprime cada um dos valores 
// do array original divididos por 10


// c) Escreva um programa que crie um novo array contendo, 
// somente, os números pares do array original e imprima esse 
// novo array


// d) Escreva um programa que crie um novo array contendo 
// strings, da seguinte forma: 
// "O elemento do índex `i` é: `numero`". 
// Depois, imprima este novo array.


// e) Escreva um programa que imprima no console o maior e o 
// menor números contidos no array original


const arrayOriginal = [10, 25, 30, 45, 50, 65]

function imprimeValores(array) {
    
    for(let valor of array)
    
    console.log(valor)
}
imprimeValores(arrayOriginal)

function imprimeValoresDivididosPorDez(array) {
    
    for(let valor of array){
        let valorDividido = (valor/10)
        console.log(valorDividido)
    }
    
    
}
imprimeValoresDivididosPorDez(arrayOriginal)

function imprimePares(array){
    const listaDePares = []

    for(let numero of array){
        if(numero % 2 === 0){
            listaDePares.push(numero)
        }
    }


    console.log(listaDePares)
}
imprimePares(arrayOriginal)

// Este array será usado para exemplificar as respostas de
// todos os itens

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// // Resposta item a.
// 80
// 30
// 130
// 40
// 60
// 21
// 70
// 120
// 90
// 103
// 110
// 55

// // Resposta item b.
// 8
// 3 
// 13
// 4
// 6
// 2.1
// 7 
// 12
// 9
// 10.3
// 11 
// 5.5

// // Resposta item c.
// [80, 30, 130, 40, 60, 70, 120, 90, 110] 

// // Resposta item d.
// [ 'O elemento do índex 0 é 80',
//   'O elemento do índex 1 é 30',
//   'O elemento do índex 2 é 130',
//   'O elemento do índex 3 é 40',
//   'O elemento do índex 4 é 60',
//   'O elemento do índex 5 é 21',
//   'O elemento do índex 6 é 70',
//   'O elemento do índex 7 é 120',
//   'O elemento do índex 8 é 90',
//   'O elemento do índex 9 é 103',
//   'O elemento do índex 10 é 110',
//   'O elemento do índex 11 é 55' ]

// // Resposta e.
// "O maior número é 130 e o menor é 21!"