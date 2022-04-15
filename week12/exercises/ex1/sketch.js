// Sound from Erokia

let sound, amplitude;
let img;

function preload(){
  sound = loadSound('synth.mp3');
  img = loadImage('rainbow.jpg');
}
function setup() {
  let cnv = createCanvas(800,800);
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
  image(img, 800, 800);
}

function draw() {
  background(img);
  text('tap to play', 400, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  noStroke();
  ellipse(width/4, height/4, size, size);
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}