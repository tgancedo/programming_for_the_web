let grid = undefined;
//let stroke1 = prompt("enter a basic color name in lowercase", "gray");
//let stroke2 = prompt("enter another basic color lowercase", "purple");
function setup() {
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png");
}
function draw() {
  background(grid);
  // snowman legs
  fill("#f1f1f1");
  strokeWeight(10);
  stroke(0);
  // left leg
  ellipse(400, 650, 100);
  // right leg
  ellipse(600, 650, 100);
  // left arm
  stroke(0);
  strokeWeight(10);
  line(200, 500, 430, 330);
  // right arm
  stroke (0);
  strokeWeight(10);
  line(800, 450, 430, 330);
  // body
  ellipse(500, 450, 350, 400);
  // head
  ellipse(500, 200, 200);
  // hat top
  ellipse(500, 90, 100);
  // hat body
  strokeJoin(ROUND);
  rect(400, 80, 200, 80);
  // eyes
  stroke(0);
  strokeWeight(20);
  point(450, 200);
  point(550, 200);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 230, 70, 70, radians(30), radians(150));
  // ground
  fill("#f1f1f1");
  noStroke();
  rect(0, 700, 1000, 200);
}