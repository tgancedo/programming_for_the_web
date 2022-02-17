let bubbles = [];

function setup () {
  createCanvas(800, 800);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 5);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw () {
  background (216, 255, 63);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
}
  show() {
    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.r * 12);
  }
}