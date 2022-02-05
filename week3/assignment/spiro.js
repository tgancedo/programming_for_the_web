let angle = 0;
let rotateBy = 5;
let r, g, b;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(DEGREES);
  r = random(255);
  g = random(255);
  b = random(255);
  button = createButton('stop');
  button.position(0, 0);
  button.mousePressed(noLoop);
  button = createButton('start');
  button.position(500, 0);
  button.mousePressed(loop);
}

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  noFill();
  stroke(r, g, b);
  strokeWeight(1);
  line(30, 20 + alt, 85, 75);
  ellipse(150, 150 + alt, 200, 200 - alt);
}

function draw() {
  translate(500, 500);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 5;
}

function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}