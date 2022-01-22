let grid = undefined;
let fill1 = prompt("enter a basic color name in lowercase", "chartreuse");
let fill2 = prompt("enter another basic color lowercase", "magenta");
function setup() {
  createCanvas(1000, 800);
  background("#a7bdd5");
  grid = loadImage("images/100px_grid.png");
}
function draw() {
  //background(grid);
  // snowman legs
  fill("#f1f1f1");
  strokeWeight(10);
  stroke(0);
  // snowman left leg
  ellipse(400, 650, 100);
  // snowman right leg
  ellipse(600, 650, 100);
  // snowman left arm
  stroke(0);
  strokeWeight(10);
  line(200, 500, 430, 330);
  // snowman right arm
  line(800, 450, 430, 330);
  // snowman body
  ellipse(500, 450, 350, 400);
  // snowman head
  ellipse(500, 200, 200);
  // snowman hat top
  fill(fill1);
  ellipse(500, 90, 100);
  // snowman hat body
  strokeJoin(ROUND);
  rect(400, 80, 200, 80);
  // snowman scarf horizontal
  fill(fill2);
  strokeJoin(ROUND);
  rect(350, 278, 300, 70);
  // snowman scarf vertical
  strokeJoin(ROUND);
  rect(500, 278, 70, 250);
  // snowman eyes
  strokeWeight(20);
  point(450, 200);
  point(550, 200);
  // snowman mouth
  noFill();
  strokeWeight(10);
  arc(500, 230, 70, 70, radians(30), radians(150));
  // left baby body
  fill("#f1f1f1");
  strokeWeight(10);
  ellipse(200, 650, 130);
  // left baby head
  ellipse(200, 550, 100);
  // left baby eyes
  strokeWeight(15);
  point(180, 550);
  point(220, 550);
  // left baby mouth
  noFill();
  strokeWeight(8);
  line(180, 575, 220, 575);
  // right baby body
  fill("#f1f1f1");
  strokeWeight(10);
  ellipse(800, 650, 180);
  // right baby head
  ellipse(800, 520, 130);
  // right baby eyes
  strokeWeight(15);
  point(770, 520);
  point(830, 520);
  // right baby mouth
  noFill();
  strokeWeight(8);
  arc(800, 550, 30, 30, radians(40), radians(400));
  // ground
  fill("#f1f1f1");
  strokeWeight(10);
  rect(-5, 700, 1010, 200);
}