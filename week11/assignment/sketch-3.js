function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(1);
  stroke(255);

  for(var i = 0; i < 20; i++) { // first loop - columns
    for(var j = 0; j < 20; j++) { // second loop - rows
      var x = i * 50 + 25
      var y = j * 50 + 25
      var d = 50

      fill(random(255), random(255), random(255));
      ellipse(x,y,50,50); // big circle
      ellipse(x,y,30,30); // middle circle
      ellipse(x,y,10,10); // small circle
     }
  }
}
