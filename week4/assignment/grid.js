const rectWidth = 200;
let startingX = 30;
let startingY = 200;
let cards = [];
let startingId = 0

function setup() {
  createCanvas(1080, 1080);
  background(255);
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, rectWidth);
      cards.push({ x: startingX, y: startingY, id: startingId });
      startingX += 225;
      startingId++;
    }
    startingY += 225;
    startingX = 30;
  }
  console.log(cards);
}

function mousePressed() {
  for (let j = 0; j < cards.length; j++) {
    if ((mouseX >= cards[j].x) && (mouseX <= cards[j].x + rectWidth) &&
        (mouseY >= cards[j].y) && (mouseY <= cards[j].y + rectWidth)) {
      console.log('square hit', cards[j].id);
      return false;
    }
  }
}