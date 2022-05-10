// Exercícios de interpretação de código
    
// Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.

//--------------------------------------------------------------
//Exercício 1) 
//Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 10

// console.log(b)

//Resposta: 10

// b = 5
// console.log(a, b)

//Resposta: 10 5

//--------------------------------------------------------

//Exercício 2) 
//Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

//Resposta: 10 10 10

//-------------------------------------------------------

//Exercício 3)
//Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
//Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. 
//Alem disso, os nomes não podem começar com números ou caracteres especiais.

let trabalhoDia = prompt("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDia/trabalhoDia} por hora`)

//Exercícios de escrita de código

// 1. Construa um programa, seguindo os seguintes passos:
    
//     a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
var nome

//     b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
var idade

//     c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
console.log(typeof(nome), typeof(idade))


//     d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//O resultado foram undefined e undefined, pois ambas não foram declaradas com nenhum valor ainda.

//     e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.    

var nome = prompt("Qual é o seu nome ?")  
var idade = +prompt("Qual é a sua idade ?")

//     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
console.log(typeof(nome), typeof(idade))

// O resultado foi string e number, pois ambas foram decladas agora como string porém a segunda foi convertida para number com o +

//     g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

console.log(`Ola ${nome}, você tem ${idade} anos.`)

//-------------------------------------------------------

// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
//a) Crie três novas variáveis, contendo as respostas
  
var roupa = prompt("Você está utilizando roupa azul ?")
var altura = prompt("Você mede mais que 1,80 ?")
var peso = prompt("Você pesa mais que 80 kg ?")

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

console.log(`Você está utilizando roupa azul ? ${roupa}`)
console.log(`Você mede mais que 1,80 ? ${altura}`)
console.log(`Você pesa mais que 80 kg ? ${peso}`)

//---------------------------------------------------------

//3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

// let a = 10
// let b = 25

//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25
let c = 0

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:

// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10

// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 

a = c 
b = a
c = b
