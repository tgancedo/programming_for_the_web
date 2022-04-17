// base code from Stack Up https://www.youtube.com/watch?v=ALAV5Ab-KWs

let freqs = [100, 200, 300, 400, 500, 600, 700, 800, 900]; // frequencies
let keys = [65, 83, 68, 70, 81, 87, 69, 82, 84]; // keys trigger
let pads = [];

function setup() {
  createCanvas(800, 800);
  background(0);

  for(let i = 0; i < 3; i++) {
    for(let y = 0 ; y < 3; y++){
      pads.push(new Pad(0 + (260 * i), 10 + (260 * y), freqs[i])); 
    }
  }
}

function draw() {
  for(let i = 0; i < freqs.length; i++) {
    for(let y = 0 ; y < freqs.length; y++){
    pads[i].draw();
    }
  }
}

function keyPressed() {
  // sequential search
  for(let i = 0; i < keys.length; i++) {
    if(keyCode === keys[i]) {
      pads[i].play();
    }
  }
}

class Pad {
  // this is the pad blueprint
  constructor(x, y, freq) {
    this.x = x;
    this.y = y;
    this.freq = freq;

    // oscillator - creates waveform
    this.osc = new p5.Oscillator();
    this.osc.amp(0);
    this.osc.setType('triangle'); // experiment with this
    this.osc.start();

    // envelope - how sounds ramps up
    this.env = new p5.Envelope();
    this.env.setADSR(0.001, .4, .3, .2); // experiment: attack time, decay time, sustain ratio, release time
    this.env.setRange(3, 0); // max and min level

    // amplitude - sound analyzer
    this.analyzer = new p5.Amplitude();
    this.analyzer.setInput(this.osc);
  }

  draw() {
    let level = this.analyzer.getLevel();
    let levelHeight = map(level, 0, 1.5, 0, 250);
    
    fill('#fc8003');
    rect(this.x, this.y, 250, 250);

    fill('#fcc603');
    noStroke();
    rect(this.x, this.y, 250, levelHeight);
  }

  play() {
    this.osc.start();
    this.osc.freq(this.freq);
    this.env.play(this.osc);
  }
}

