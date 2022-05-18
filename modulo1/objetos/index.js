//------------Exercícios de interpretação de código--------

//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

//---------------------EXERCÍCIO 1----------------------

//Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O QUE VAI SER IMPRESSO NO CONSOLE ?

//RESPOSTA:

//Será impresso no console: 
//Matheus Nachthergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"


//-----------------EXERCÍCIO 2----------------------------

//Leia o código abaixo:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

//RESPOSTA:

//1º console: nome: "Juca", idade: 3, raca: "SRD"
//2º console: nome: "Juba", idade: 3, raca: "SRD"
//3º console: nome: "Jubo", idade: 3, raca: "SRD"


// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//RESPOSTA:

//A sintáxe dos 3 pontos antes do nome de um objeto cria uma 
//cópia do objeto ou array para manipular a cópia
//sem alterar o objeto original.


//----------------------EXERCÍCIO 3-----------------------

//Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console ?

//RESPOSTA:

//1º console: false
//2º console: undefined

//b) Explique o valor impresso no console. 
//Você sabe por que isso aconteceu ?

//RESPOSTA:

//No primeiro console como o objeto foi definido como a const pessoa, ele apenas acessou a propriedade backender e informou o seu valor no caso false
//No segundo console como não havia a chave "altura" não havia nenhum valor a ser devolvido, logo ele voltou como "indefinido"


//-----------EXERCÍCIOS DE ESCRITA DE CÓDIGO---------------

//-------------------EXERCÍCIO 1--------------------------


//Resolva os passos a seguir:

// a) Crie um objeto. 
//Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
// Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto


const pessoaFe = {
    nome: "Fernando",
    apelidos: ["Fê", "Nando", "Fernandinho"]
}

const pessoaNovaFe = {
    ...pessoaFe,
    apelidos: ["Fernandão", "Nan", "Fefe"]
}

const pessoa0 = (objeto) => {

    console.log(`Eu sou  ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]} `)

    }
    
pessoa0(pessoaFe) 


//------------------------EXERCÍCIO 2-----------------------

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.


const pessoa1 = {
    nome: "Fernando",
    idade: 34,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "André",
    idade: 20,
    profissao: "uber"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de nome
// 2. O numero de caracteres do valor nome
// 3. O valor de idade
// 4. O valor de profissão
// 5. O numero de caracteres do valor profissão

//Exemplo:

//     const pessoa = {
//     	nome: "Bruno", 
//       idade: 23, 
//     	profissao: "Instrutor"
//     }
    
//     minhaFuncao(pessoa)
    
//Retorno: ["Bruno", 5, 23, "Instrutor", 9]

function pessoaInfo(pessoa) {
    let array = []
    array.push(pessoa.nome)
    array.push(pessoa.nome.length)
    array.push(pessoa.idade)
    array.push(pessoa.profissao)
    array.push(pessoa.profissao.length)

    return array
}

console.log(pessoaInfo(pessoa1))

console.log(pessoaInfo(pessoa2))

//----------------------EXERCÍCIO 3-----------------------

//Resolva os passos a seguir: 

// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}


// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
//Invoque essa função passando os três objetos criados. 

function encherCarrinho (fruta) {
    
    return carrinho.push(fruta)
}


// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

encherCarrinho(fruta1)
encherCarrinho(fruta2)
encherCarrinho(fruta3)

console.log(carrinho)

//Desafio

// 1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function novaPessoa() {
 const nome = prompt ("Qual é o seu nome ?")
 const idade = prompt ("Qual é a sua idade ?")

const objeto = {
    nome: nome,
    idade: idade
}
return objeto

}

console.log(novaPessoa())


// 2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true

const filme1 = {
    lancamento: 2021
}

const filme2 = {
    lancamento: 2019

}

function movies(filme1, filme2) {
    if (filme1.lancamento > filme2.lancamento) {
        console.log("O filme")
    }
      
}

//3 - Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.
