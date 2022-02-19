const DOWN = 'down';
const UP = 'up';
let startingX = 30;
let startingY = 200;
let cards = [];
const gameState = {
  totalPairs: 8,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardfaceArray = [];
let cardback;
let myFont;

function preload() {
  myFont = loadFont('assets/Rajdhani-Medium.ttf');
  cardback = loadImage('assets/card-back.png');
  cardfaceArray = [
    loadImage('assets/avocado.png'),
    loadImage('assets/cucumber.png'),
    loadImage('assets/salmon-avocado.png'),
    loadImage('assets/salmon-cucumber.png'),
    loadImage('assets/salmon.png'),
    loadImage('assets/tuna-avocado.png'),
    loadImage('assets/tuna-cucumber.png'),
    loadImage('assets/tuna.png')
  ]
}

function setup () {
  createCanvas(1080, 1080);
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

function draw () {
  background(244, 240, 233);
  if (gameState.numMatched === gameState.totalPairs) {
    fill(255, 102, 29);
    noStroke();
    textSize(40);
    textFont(myFont);
    text('you win!', 710, 160);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(0, 44, 0);
  textSize(70);
  textFont(myFont);
  text('Sushi Roll Memory Game', 30, 80);
  textSize(40);
  text('attempts ' + gameState.attempts, 30, 160);
  text('matches ' + gameState.numMatched, 370, 160);
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
      return false; // added this so that it doesn't log twice
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
      // if cards match
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      // if they don't match
      gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000);
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
    //pick random index
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

