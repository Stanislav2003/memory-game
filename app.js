document.addEventListener('DOMContentLoaded', () => {
  //card options

  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  let contadorHistorial=0

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  let sum=4;
  let lifes = document.getElementById("lifes")
  let historial=[]
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
      contadorHistorial++
      historial.push('Accio'+contadorHistorial+': you have clicked the same image!'+'<br>')
      
      sum--;
      lifes.innerHTML=sum;
      nomCarta.innerHTML=""
    }
      
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      contadorHistorial++
      historial.push('Accio'+contadorHistorial+':You found a match'+'<br>')
     
      nomCarta.innerHTML=""

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
      contadorHistorial++
      historial.push('Accio'+contadorHistorial+':Sorry try again'+'<br>')
      
      nomCarta.innerHTML=""
      sum--;
      lifes.innerHTML=sum;
    }
    if(sum==1){
      alert('HAS PERDUT STAN!')
      contadorHistorial++
      historial.push('Accio'+contadorHistorial+'HAS PERDUT STAN!'+'<br>')
     
      nomCarta.innerHTML=""
    }
    
    
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      contadorHistorial++
      historial.push('Accio'+contadorHistorial+':Congratulations! You found them all!'+'<br>')
      
    }
    
  }
  

  //flip your card
  let nomCarta=document.getElementById("nomCarta")
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    //es mostra el nom de la carta//

       nomCarta.innerHTML=(cardArray[cardId].name);
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
  
  //canvi color mouse score green blue//
  function colorcanvi(){
  let tablero=document.querySelector(".grid")
  let puntos=document.getElementById("result")
  
  tablero.addEventListener('mouseover',(e)=>{
    puntos.style.color="blue";
  })
  tablero.addEventListener('mouseout',(e)=>{
    puntos.style.color="green";
  })
}
colorcanvi();


let boto=document.getElementById("historial")
boto.addEventListener('click',()=>{
  
  document.getElementById("historialText").innerHTML = JSON.stringify(historial)
})
 


  
  
})
