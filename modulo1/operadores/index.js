// - Exercícios de interpretação de código
    
//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.
    
//-----------------------------------------------------------------------------------------------------------------

//Exercício 1) Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//Resultado: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//Resultado: b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

//Resultado: c. true

console.log("d. ", typeof resultado)

//Resultado: d. boolean

//-----------------------------------------------------------------------------------------------------------------------

//Exercício 2) Seu colega se aproxima de você falando que o código dele não funciona como devia.  
//Vamos ajudá-lo: consegue perceber algum problema? 
//O que será impresso no console?

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Resultado: Será impresso não a soma e sim a concatenação de 2 números distintos no caso o primeiroNumero e o segundoNumero
//Exemplo: primeiroNumero 13 segundoNumero 13 soma será 1313 e não 26

//----------------------------------------------------------------------------------------------------------------------------

//Exercício 3) Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Acrescentar o Number antes do prompt para converter a string em number

//-----------------------------------------------------------------------------------------------------------------------------------
// Exercício de escrita de código

// 1. Faça um programa que:

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

const idadeUsuario = Number(prompt("Informe a sua idade:"))
const idadeAmigo = Number(prompt("Informe a idade do seu melhor amigo:"))
console.log("Sua idade é maior que a do seu melhor amigo ?", idadeUsuario > idadeAmigo)
console.log("A diferença entre as 2 idades é igual a", idadeUsuario - idadeAmigo ,"anos")

//--------------------------------------------------------------------------------------------------------------------------------

// 2. Faça um programa que:

// a) Peça ao usuário que insira um número par

// b) Imprima na console o resto da divisão desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const par = Number(prompt("Informe um número par"))
console.log("O resto da divisão por 2 do número informado é igual a:", par % 2)

// O padrão observado foi que todo número par quando submetido a divisão por 2 tem como resto 0.
// Caso o usuário insira um número ímpar o resto da divisão por 2 é igual a 1

//-------------------------------------------------------------------------------------------------------------------------------

// 3. Faça um programa que pergunte ao usuário sua idade em anos. 
// Depois, imprima no console 

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

const idade = Number(prompt("Qual a sua idade em anos ?"))
console.log("Você possui", idade * 12, "meses de vida")
console.log("Você possui", idade * 365, "dias de vida")
console.log("Você possui", idade * 8760, "horas de vida")

//----------------------------------------------------------------------------------------------------------------------------------------

// 4. Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const num1 = Number(prompt("Informe o primeiro número:"))
const num2 = Number(prompt("Informe o segundo número:"))
console.log("O primeiro número é maior que o segundo ?", num1 > num2)
console.log("O primeiro número é igual ao segundo ?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo ?", num1 % num2 === 0)
console.log("O segundo  número é divisível pelo primeiro ?", num2 % num1 === 0)