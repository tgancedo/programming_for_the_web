let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 30;
let startingY = 200;
let cards = [];
const gameState = {

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
  for (let k = 0; k < cards.length; k++) {
    if(cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      return false;
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
    this.show();
  }

  show () {
    if(this.face === DOWN) {
      noStroke();
      rect(this.x, this.y, this.width, this.height);
      image(cardback, this.x, this.y);
    } else {
      stroke(255);
      strokeWeight(2);
      rect(this.x, this.y, this.width, this.height);
      image(this.cardfaceImg, this.x, this.y);
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