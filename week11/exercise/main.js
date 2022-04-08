// code base from Getting Started with p5.js pg. 53

function setup() {
  createCanvas(800,800);
  strokeWeight(1);
}

function draw() {
  background(0);
  for (var y = 0; y <= height-10; y+= 20) {
    for (var x = 50; x <= width-10; x+= 140) {
      stroke(255);
      line (x, y, 400, 800);
      fill(255, 204, 0);
      noStroke();
      ellipse (x, y, 4, 4);
    }
  }
}