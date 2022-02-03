let coordinates = [
  {offsetX: 0, offsetY: 0},
  {offsetX: 0, offsetY: 200},
  {offsetX: 0, offsetY: 200},
  {offsetX: 200, offsetY: -400},
  {offsetX: 0, offsetY: 200},
  {offsetX: 0, offsetY: 200},
  {offsetX: 200, offsetY: -400},
  {offsetX: 0, offsetY: 200},
  {offsetX: 0, offsetY: 200}
]

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function createTile(offsetX, offsetY, background, diamond) {
  translate(offsetX, offsetY);
  fill(background);
  noStroke();
  rect(0, 0, 200, 200);
  fill(237, 237, 237);
  arc(200, 200, 150, 150, 180, 270);
  arc(0, 200, 150, 150, 270, 0);
  arc(0, 0, 150, 150, 150, 90);
  arc(200, 0, 150, 150, 90, -90);
  fill(diamond);
  quad(100, 70, 120, 100, 100, 130, 80, 100);
}

function draw() {
  // createTile(0, 0, 'red', 'blue');
  // createTile(0, 200, 'blue', 'red');
  // createTile(0, 200, 'green', 'orange');
  // createTile(200, -400, 'orange', 'green');
  // createTile(0, 200, 'yellow', 'purple');
  // createTile(0, 200, 'purple', 'yellow');
  // createTile(200, -400, 'pink', 'brown');
  // createTile(0, 200, 'brown', 'pink');
  // createTile(0, 200, 'indigo', 'blue');

  for(let i = 0; i < coordinates.length; i++) {
    createTile(coordinates[i].offsetX, coordinates[i].offsetY, 'red', 'blue');
    } 
  console.log(createTile);
}
