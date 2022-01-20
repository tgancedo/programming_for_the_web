function setup() {
  createCanvas(1920, 1080);
  background(color(0, 0, 255));
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}