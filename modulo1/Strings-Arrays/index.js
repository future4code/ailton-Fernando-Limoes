// Exercícios de interpretação de código


// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)
//Resposta: undefined

// array = null
// console.log('b. ', array)
//Resposta: null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//Resposta: 11

// let i = 0
// console.log('d. ', array[i])
//Resposta: 3

// array[i+1] = 19
// console.log('e. ', array)
//Resposta: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
//Resposta 9

// 2. Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//RESPOSTA: SUBI NUM ÔNIBUS EM MIRROCOS, 27


// Exercícios de escrita de código


// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima no console o array completo

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


const comidasPreferidas = ["Lasanha", "Macarrão", "Batata Frita", "Hamburguer", "Pizza"]
console.log(comidasPreferidas)
console.log("Essas são minhas as comidas preferidas: ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
const comidaUsuario = prompt("Informe a sua comida favorita")
comidasPreferidas [0 , 1] = comidaUsuario
console.log(comidasPreferidas)


// 3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no consoleImprima no console


let listaDeTarefas = []
const tarefa1 = prompt("Informe a 1ª tarefa que você precisa realizar no dia")
const tarefa2 = prompt("Informe a 2ª tarefa que você precisa realizar no dia")
const tarefa3 = prompt("Informe a 3ª tarefa que você precisa realizar no dia")
listaDeTarefas = [tarefa1, tarefa2, tarefa3] 
//index              0        1        2
console.log(listaDeTarefas)
let tarefaRealizada = Number(prompt("Informe se voce ja realizou a tarefa 1, a tarefa 2 ou a tarefa 3"))
console.log(listaDeTarefas[tarefaRealizada-1])