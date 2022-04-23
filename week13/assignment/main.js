var yPos = 0;
var r = 0;
var g = 0;
var b = 0;
var bugs = []; 

function setup() {
  createCanvas(800, 800);
  for (var b = 0; b < 90; b++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  // background
  r = map(yPos, 0, 800, 52, 0);
  g = map(yPos, 0, 800, 222, 0);
  b = map(yPos, 0, 800, 235, 0);
  background(r, g, b);

  // sun
  noStroke();
  fill(235, 97, 52);
  ellipse(150, yPos, 155, 155);
  yPos = yPos + 2;

  if(yPos > 900){
    yPos = -100; 
  }

  // bugs
  fill(255, 246, 117);
  for (var u = 0; u < bugs.length; u++) {
    bugs[u].move();
    bugs[u].display();
  }

  // grass
  fill(0, 145, 31);
  translate(400, 800);

  c = sin(frameCount / 20); // speed
  x = 0;
  y = 0;
  t = c / 20;

  for(i = 0; i < 200; i += 0.3) {
    r = 30 * (200 - i) / 400; // diameter, thickness

    circle(x - 325, y, r);
    circle(x - 300, y, r);
    circle(x - 200, y, r);
    circle(x - 100, y, r);
    circle(x - 40, y, r);
    circle(x - 30, y, r);
    circle(x + 25, y, r);
    circle(x + 40, y, r);
    circle(x + 50, y, r);
    circle(x + 90, y, r);
    circle(x + 110, y, r);
    circle(x + 150, y, r);
    circle(x + 200, y, r);
    circle(x + 300, y, r);

    x -= 0.5 * sin(t); // horizontal position, tip of grass
    y -= 0.5 * cos(t); // vertical position, length of grass
    t += 0.001 * c; // curvature times speed
  }
}

class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 5);
    this.speed = 1;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
