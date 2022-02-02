function setup() {
  createCanvas(200,200);
  angleMode(DEGREES);
}

function createTile() {
  translate(0, 0);
  fill('black');
  noStroke();
  rect(0, 0, 200, 200);
  fill('orange');
  arc(200, 200, 150, 150, 180, 270);
  fill('yellow');
  arc(0, 200, 150, 150, 270, 0);
  fill('green');
  arc(0, 0, 150, 150, 150, 90);
  fill('red');
  arc(200, 0, 150, 150, 90, -90);
  fill('white');
  quad(100, 70, 120, 100, 100, 130, 80, 100);
}

function draw() {
  createTile();
  noLoop();
}