function setup () {
  createCanvas(1080, 1080);
  background(0);
  let myCard = new Card();
}

class Card {
  constructor () {
    this.x = 100;
    this.y = 100;
    this.width = 200;
    this.height = 200;
  }
  show () {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
}