function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
  frameRate(40); 
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    stroke(0, 0, 255);
    ellipse(mouseX, mouseY, 80, 80);
  }
}

function mousePressed() {
  background(0, 0, 255);
}