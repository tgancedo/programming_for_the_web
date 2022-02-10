let rectX = 0;
const rectWidth = 75;
let clickCount = 0;
const rectHeight = 75;
let rectY;
let speed;

function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

function draw () {
  background(155);
  drawShape();
  rectX += speed;
  //text
  textSize(20);
  text('Catch me if you can', width / 2, 30);
  textAlign(CENTER);
  textStyle(ITALIC);
  //no loop + final score
  if(rectX >= width) {
    noLoop();
    text('Your score was ' + clickCount, width / 2, 485);
  }
}

function mousePressed() {
  if (
    (mouseX >= rectX && mouseX <= rectX + rectWidth) && 
    (mouseY >= rectY && mouseY <= rectY + rectHeight)
    ) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('yellow');
  strokeWeight(0);
  rect(rectX, rectY, rectWidth, rectHeight, 20);
}