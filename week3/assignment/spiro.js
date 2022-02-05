let rotateBy = 5;
let r, g, b; //random colors declaration

function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(DEGREES);
  r = random(255);
  g = random(255);
  b = random(255);

  //stop button
  button = createButton('stop');
  button.position(0, 0);
  button.mousePressed(noLoop);

  //continue button
  button = createButton('continue');
  button.position(500, 0);
  button.mousePressed(loop);
}

function makeArm(circleX, circleY, rotateBy) {
  let alt = Math.round(rotateBy / 360);
  //large circle
  noFill();
  stroke(r, g, b);
  strokeWeight(1);
  ellipse(circleX, circleY + alt, 150 - alt);

  //line
  line(50, 50 + alt, 120, 75);

  //small square
  rectMode(CENTER);
  fill(0);
  rect(0, 0, 100, 100);
}

function draw() {
  translate(500, 500);
  rotate(rotateBy);
  makeArm(150, 150, rotateBy);
  makeArm(200, 200, rotateBy);
  rotateBy += 5;
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}