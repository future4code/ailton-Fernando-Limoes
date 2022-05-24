
let cardUser = [];
let cardPc = [];
let scoreUser = [];
let scorePc = [];
let allUserSuits = " ";
let allPcSuits = " ";


const arrayOfPoints = (item) => { 
   return item.valor
}

const arrayOfSuits = (item) =>{ 
   return item.texto
}

function totalScore(array){ 
   let totalPoints = 0
   for(let i = 0; i < array.length; i++){
      totalPoints = totalPoints + array[i]
   } return totalPoints
}

function suits(array){ 
   let suits = ""
   for(let i = 0; i < array.length; i++){
      suits = suits + array[i] + "  "
   } return suits
}

function returnAllUserSuits(){ 
   return ((allUserSuits = cardUser.map(arrayOfSuits)), allUserSuits = suits(allUserSuits))
}

function returnAllPCSuits(){ 
   return ((allPcSuits = cardPc.map(arrayOfSuits)), allPcSuits = suits(allPcSuits))
}


let welcomeQuestion = confirm(`Boas-vindas ao jogo de Blackjack! 
Quer iniciar uma nova rodada?`);

if(welcomeQuestion === true){
   myBlackjack()
} else {
   alert("O jogo encerrou. Você pode fechar esta página.")
}


function myBlackjack(){
   let i = 0
   while(i < 2){
      cardUser.push(comprarCarta())
      cardPc.push(comprarCarta())
      i++
   }

   if((cardUser[0].texto && cardUser[1].texto === "A") || (cardPc[0].texto && cardPc[1].texto === "A")){
      myBlackjack()
   }
   
   scoreUser = cardUser.map(arrayOfPoints); scoreUser = totalScore(scoreUser) 
   scorePc = cardPc.map(arrayOfPoints); scorePc = totalScore(scorePc) 
   
   if(scoreUser === 21 && scorePc === 21){
      alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "A partida finaliou empatada.")  
   } 
   
   let anotherCard = confirm("Você totaliza " + scoreUser + " pontos. Suas cartas são " + returnAllUserSuits() + "\n" +
                           "O computador revelou a carta " + cardPc[0].texto + "\n" + 
                           "\n" +
                           "Deseja tirar outra carta?")
   
   while(anotherCard === true && scoreUser <= 21){
      cardUser.push(comprarCarta())
      scoreUser = cardUser.map(arrayOfPoints); scoreUser = totalScore(scoreUser)
      if(scoreUser > 21) {
      alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "\n" +
            "O Computador ganhou!")
      } else {
         anotherCard = confirm(" As suas cartas são " + returnAllUserSuits() + "\n" +
                               "\n" +
                               "Deseja tirar outra carta?")}
   }
   
   if(anotherCard === false){
      while(scorePc < scoreUser || scorePc < 21){
         cardPc.push(comprarCarta())
         scorePc = cardPc.map(arrayOfPoints); scorePc = totalScore(scorePc)
         if (scorePc === 21 && scoreUser === 21){
            alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
                  "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
                  "\n" +
                  "A partida termina empatada.")
         } else if(scorePc > 21) {
            alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
                  "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
                  "\n" +
                  "Você ganhou!")
         }
      }
   }
}