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
  fill('white');
  quad(100, 70, 120, 100, 100, 130, 80, 100);
}

function draw() {
  createTile();
}