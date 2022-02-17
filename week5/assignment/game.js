let myCard;
const DOWN = 'down';
const UP = 'up';

function setup () {
  createCanvas(1080, 1080);
  background(0);
  myCard = new Card();
}

function mousePressed () {
  console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
  constructor () {
    this.x = 100;
    this.y = 100;
    this.width = 200;
    this.height = 200;
    this.face = DOWN;
    this.show();
  }

  show () {
    if(this.face === DOWN) {
      fill(255);
      rect(this.x, this.y, this.width, this.height);
    } else {
      fill(100);
      rect(this.x, this.y, this.width, this.height);
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