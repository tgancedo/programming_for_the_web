function setup() {
  createCanvas(200,200);
}

function createTile() {
  translate(0, 0);
  fill('black');
  noStroke();
  rect(0, 0, 200, 200);
  fill('orange');
  circle(200, 200, 150);
  fill('yellow');
  circle(0, 200, 150);
  fill('green');
  circle(0, 0, 150);
  fill('red');
  circle(200, 0, 150);
  // noStroke();
  // fill('yellow');
  // circle(100, 50, 50);
  // circle(50, 100, 50);
  // circle(150, 100, 50);
  // circle(100, 150, 50);
  // noFill();
  // stroke('purple');
  // strokeWeight(5);
  // circle(100, 100, 100);
}

function draw() {
  createTile();
}