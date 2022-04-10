function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  // this starts the loop for the static circle. Starts at 0, grows by 2000, moves by 15 every instance
  for(var i = 0; i < 2000; i += 15) {
    noFill();
    stroke('blue');
    strokeWeight(2);
    ellipse(400, 400, i); // i variable passes through diameter parameter
  }
  // this is the loop for the cursor circle. Same size as static circle.
  for(var i = 0; i < 2000; i += 15) {
    ellipse(mouseX, mouseY, i);
    stroke('orange')
  }
}