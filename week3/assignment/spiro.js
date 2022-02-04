let rotateBy = 5;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(DEGREES);
}

function makeArm(rotateBy, color) {
  let alt = Math.round(rotateBy / 360);
  noFill();
  stroke(color);
  strokeWeight(1);
  ellipse(-56, -56, 200, 200);
}

function draw() {
  translate(500, 500);
  rotate(rotateBy);
  makeArm(rotateBy, 'blue');
  rotateBy += 5;
}

function mousePressed() {
  noLoop();
}