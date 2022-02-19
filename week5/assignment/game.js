let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 30;
let startingY = 200;
let cards = [];
const gameState = {
  totalPairs: 0,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardfaceArray = [];

function preload() {
  cardback = loadImage('images/card-back.png');
  cardfaceArray = [
    loadImage('images/avocado.png'),
    loadImage('images/cucumber.png'),
    loadImage('images/salmon-avocado.png'),
    loadImage('images/salmon-cucumber.png'),
    loadImage('images/salmon.png'),
    loadImage('images/tuna-avocado.png'),
    loadImage('images/tuna-cucumber.png'),
    loadImage('images/tuna.png')
  ]
}

function setup () {
  createCanvas(1080, 1080);
  background(255);
  let selectedFaces = [];
  for (let z = 0; z < 8; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    //remove the used cardface so it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 225;
    }
    startingY += 225;
    startingX = 30;
  }
}

function mousePressed () {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, and then
    // we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
      return false;
    }
  }
  if (gameState.flippedCards.length === 2) {
    if (gameState.flippedCards[0].faceImage === gameState.flippedCards[1].faceImage) {
      // cards match! time to score!
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000)
    }
  }
}

class Card {
  constructor (x, y, cardfaceImg) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 200;
    this.face = DOWN;
    this.cardfaceImg = cardfaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if (this.face === UP || this.isMatch) {
      stroke(255);
      strokeWeight(2);
      rect(this.x, this.y, this.width, this.height);
      image(this.cardfaceImg, this.x, this.y);
    } else {
      noStroke();
      rect(this.x, this.y, this.width, this.height);
      image(cardback, this.x, this.y);
    }
  }

  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
        mouseY >= this.y && mouseY <= this.y + this.height) {
          this.flip();
          return true;
        } else {
          return false;
        }
  }

  flip () {
    if (this.face === DOWN) {
        this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show()
  }
}

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    //Pick random index
    const idx = Math.floor(Math.random() * counter);
    //decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}

