function setup() {
  createCanvas(200,200);
  angleMode(DEGREES);
  noLoop();
}

function createTile() {
  translate(0, 0);
  fill('red');
  noStroke();
  rect(0, 0, 200, 200);
  fill(237, 237, 237);
  arc(200, 200, 150, 150, 180, 270);
  arc(0, 200, 150, 150, 270, 0);
  arc(0, 0, 150, 150, 150, 90);
  arc(200, 0, 150, 150, 90, -90);
  quad(100, 70, 120, 100, 100, 130, 80, 100);
}

function draw() {
  createTile();
}