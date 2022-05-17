//------------Exercícios de interpretação de código--------

//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

//-----------------------EXERCÍCIO 1----------------------

//1) Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")

// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. 
// Qual o teste que ele realiza? 

//RESPOSTA:
//Ele verifica se o resto da divisão por 2 é igual a 0, 
//também pode ser utilizado para verificar se um número é par ou ímpar

// b) Para que tipos de números ele imprime no console 
// "Passou no teste"? 

//RESPOSTA:
//Números pares no geral

// c) Para que tipos de números a mensagem é 
// "Não passou no teste"?

//RESPOSTA:
//Números ímpares !


//-----------------------EXERCÍCIO 2----------------------------

//O código abaixo foi feito por uma pessoa desenvolvedora, 
// contratada para automatizar algumas tarefas de um 
// supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

//RESPOSTA:

//O Código serve para verificar se a fruta informada pelo usuário
//tem a condição de igualdade solicitada pelo switch case
//desta forma frutas que constam na lista do switch possuem
//nomes específicos e o seu devido preço, para frutas na qual
//o usuário digitou e não consta na lista ele recebe o preço
//que consta na opção default

// b) Qual será a mensagem impressa no console, 
// se o valor de fruta for `"Maçã"`?

//RESPOSTA:
//Se o valor for "Maça" a mensagem impressa no console sera:
//O preço da fruta  Maçã  é  R$  2.25

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//RESPOSTA:
//Ele irá imprimir como valor para "Pêra" o valor do default que é 5


//----------------------EXERCÍCIO 3-----------------------

//3)Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

//RESPOSTA:
//Recebendo e armazendo o valor que o usuário informa 
//na variável numero e convertendo o quer for digitado para number

// b) Considere um usuário digitou o número 10. 
// Qual será a mensagem do terminal? E se fosse o número -10?

//RESPOSTA:
//Se o valor for 10 irá imprimir no console a mensagem:
//Esse número passou no teste

//Se o valor for -10 não irá imprimir valor algum
//no console para o usuário pois o if só possui uma condição
//que seja maior que 0, se for 0 ou menor que 0 não irá ter
//nenhuma condição que atenda esta demanda pois falta outras
//condicionantes.

// c) Haverá algum erro no console? 
// Justifique usando os conceitos de bloco ou escopo.

//RESPOSTA:
//Havera a mensagem de erro relacionado a linha 105, referente a mensagem
//pois mensagem esta dentro do if então atendendo ou não as condições
//como o código é lido de forma sequencial caso atenda irá
//ler o console.log dentro do if, caso contrário irá sair do if
//e irá tentar acessar mensagem porém a condição do if não foi atendida
//então uma mensagem de erro irá ser apresentada


//----------------EXERCÍCIOS DE ESCRITA DE CÓDIGO---------------

//-------------------------EXERCÍCIO 1--------------------------

//1) Faça um programa que pergunta ao usuário qual a idade 
// dele e imprima no console se ele/ela pode dirigir 
// (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e 
// guarde em uma variável.

let idadeUsuario = Number(prompt("Qual a sua idade?"))

// b) Garanta que essa variável é do tipo `Number`, 
// você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à 
// idade mínima que permite dirigir. Se sim, imprima no 
// console `"Você pode dirigir"`, caso contrário, 
// imprima `"Você não pode dirigir."`

if(idadeUsuario >= 18) {
    console.log("Você pode dirigir! :D")
} else {
    console.log("Você não pode dirigir. :(")
}

//------------------------EXERCÍCIO 2-----------------------

//2) Agora faça um programa que verifica que turno do dia 
// um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
// ou N (Noturno). Imprima no console a mensagem "Bom Dia!", 
// "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno = prompt("Informe o turno que você estuda: M(Matutino), V(Vespertino) ou N(Nortuno)").toUpperCase()

if(turno === 'M'){
    console.log("Bom dia!")
} else if (turno === 'V') {
    console.log("Boa tarde!")     
} else if (turno === 'N') {
    console.log("Boa noite!")
} else {
    console.log("Opção inexistente")
}

//----------------------EXERCÍCIO 3-----------------------

// 3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turno) {
    case 'M': 
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
    default:
        console.log("Opção inexistente")
        break
}


//----------------------EXERCÍCIO 4-----------------------

// 4) Considere a situação: 

// você vai ao cinema com um amigo ou amiga, porém ele/ela só 
// assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. 

//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
// e outra pergunta sobre o preço do ingresso, então verifique
// se seu amigo ou amiga vai topar assistir o filme.

// Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Informe qual o gênero de filme que você vai assistir:").toLowerCase()
let precoIngresso = Number(prompt("Informe o valor do ingresso:"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme! :)")
} else {
    console.log("Escolha outro filme :(")
}

//-----------------------DESAFIO----------------------------

