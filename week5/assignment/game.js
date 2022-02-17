let myCard;

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
    this.show();
  }

  show () {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
        mouseY >= this.y && mouseY <= this.y + this.height) {
          return true;
        } else {
          return false;
        }
  }
}