document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'cruce caminos',
        img: 'imagenes/cruce de caminos.jpg'
      },
      {
        name: 'stop',
        img: 'imagenes/stop.png'
      },
      {
        name: 'giro u',
        img: 'imagenes/girar en u copy.jpg'
      },
      {
        name: 'cruz San Andres',
        img: 'imagenes/cruz de san andres.jpg'
      },
      {
        name: 'curva',
        img: 'imagenes/curva.jpg'
      },
      {
        name: 'gomeria',
        img: 'imagenes/gomeria.png'
      },
      {
        name: 'semaforo',
        img: ''
      },
      {
        name: 'socorro',
        img: ''
      },
      {
        name: 'cruce caminos',
        img: 'imagenes/cruce de caminos.jpg'
      },
      {
        name: 'stop',
        img: 'imagenes/stop.png'
      },
      {
        name: 'giro u',
        img: 'imagenes/girar en u copy.jpg'
      },
      {
        name: 'cruz San Andres',
        img: 'imagenes/cruz de san andres.jpg'
      },
      {
        name: 'curva',
        img: 'imagenes/curva.jpg'
      },
      {
        name: 'gomeria',
        img: 'imagenes/gomeria.png'
      }
      {
        name: 'semaforo',
        img: ''
      },
      {
        name: 'socorro',
        img: ''
      },
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imagenes/images.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imagenes/images.jpg')
        cards[optionTwoId].setAttribute('src', 'imagenes/images.jpg')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Haz encontrado un par')
        cards[optionOneId].setAttribute('src', 'imagenes/blanco.png')
        cards[optionTwoId].setAttribute('src', 'imagenes/blanco.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'imagenes/images.png')
        cards[optionTwoId].setAttribute('src', 'imagenes/images.png')
        alert('Intentalo de nuevo')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '¡Felicitaciones, has encontrado todas!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
