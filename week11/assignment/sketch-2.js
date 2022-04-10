function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  // this loop starts the grid. Starts at 0, grows by 20, adds 1 every instance
  for(var i = 0; i < 20; i++) { // first loop - columns
    for(var j = 0; j < 20; j++) { // second loop - rows
      // these variables go into the ellipse as parameters in order to repeat every instance
      var x = i * 50 + 25
      var y = j * 50 + 25
      var d = i * j * 25
      // these variables create the rgb gradient that will pass through the stroke fill using the map function
      // map function has five arguments (index or value, start1, stop1, start2, stop2)
      var r = map(i, 0, 7, 0, 255) 
      var g = map(i, 0, 7, 255, 0)
      var b = map(j, 0, 7, 0, 255)
      noFill();
      stroke(r, g, b);
      strokeWeight(1);

      ellipse(x,y,d);
    }
  }
}