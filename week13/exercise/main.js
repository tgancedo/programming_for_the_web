var pos;

function setup () {
  createCanvas(800, 800)
  angleMode(DEGREES)

  pos = 0.0 // position as float value in decimals
  inc = 1.0  // increase position in angle

  pos2 = 0.0
  inc2 = 1.0
}

function draw () {
  
  clear()
  background(30)
  noFill()
  
  translate(width/2, height/2)

  var mySinVal = sin(pos)
  var mySinVal2 = sin(pos2)

  amplified = mySinVal * 200
  amplified2 = mySinVal2 * 100

  for (x = 0; x <= 360; x = x + 5) {
    stroke(192, 255, 181)
    curve(0, 0, x, amplified, 400, 400, 0, 0)
    stroke(255, 181, 238)
    ellipse(0, amplified2, amplified2 - x, amplified)
    rotate(x)
  }

  pos = pos + inc
  pos2 = pos2 + inc

}
