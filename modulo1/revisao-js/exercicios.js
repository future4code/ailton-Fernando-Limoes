// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b);
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pairs = (item) => {
        return item % 2 === 0
    }
    return array.filter(pairs)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const onlyPairs = (item)  => {
        let pairs = item % 2 === 0
        return pairs
    }
    
    const pairs = array.filter(onlyPairs)
    let squared = []

    for(let i = 0; i < pairs.length; i ++){
       squared[i] = pairs[i] ** 2
    } return squared
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++) {
        if(maior < array[i]){
            maior = array[i]
        }
    } return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let object = {}
    let maiorMenor = 0
    let menor = 0
    if(num1 > num2){
        object.maiorNumero = num1
        maiorMenor = num1 - num2
        menor = num2
    } else {
        object.maiorNumero = num2
        maiorMenor = num2 - num1
        menor = num1
    }

    if(object.maiorNumero % menor === 0){
        object.maiorDivisivelPorMenor = true
    } else {
        object.maiorDivisivelPorMenor = false
    }
    object.diferenca = maiorMenor

    return object
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let multiplicado = n * 2
    let regressivo = 0
    let i = multiplicado - 1
    let pares = []
    while(i !== 0){
        if(regressivo % 2 === 0){
            pares.push(regressivo)
            regressivo += 1
            i--
        } else{
            regressivo += 1
            i--
        }
    } return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a, b) => a - b);
    
    let arrayFinal = []
    arrayFinal.push(arrayOrdenado[arrayOrdenado.length - 2])
    arrayFinal.push(arrayOrdenado[1])

    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.join(", ")

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`
    }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => 
   item.altura >= 1.5 && item.idade > 14 && item.idade < 60) 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item) => 
    item.altura < 1.5 || item.idade <= 14 ||item.idade > 60)  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((contaCliente) =>{
        let totalDeCompras = 0
        contaCliente.compras.forEach((gasto) =>{
            totalDeCompras = totalDeCompras + gasto
        })
        contaCliente.saldoTotal = contaCliente.saldoTotal - totalDeCompras
        contaCliente.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let result = {}
    consultas.sort(function (a, b){
        let aMin = a.nome.toLowerCase()
        let bMin = b.nome.toLowerCase()
        return aMin === bMin ? 0 : aMin > bMin ? 1 : -1;
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b){
        let aToDate = new Date(a.dataDaConsulta).getDate()
        let bToDate = new Date(b.dataDaConsulta).getDate()
        
        return aToDate - bToDate
    })
    return consultas
}


//-------------------------------------------------------------------------------------------------------------------
//          DESAFIOS

function retornaNumerosPares(array) {
    let i = 0
    let NewArray = []
    while(i < array.length){
      if(array[i] % 2 === 0){
         NewArray.push(array[i])
      } i++
  } return NewArray
}