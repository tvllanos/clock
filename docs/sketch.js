function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  setClockBackgroundColor("rgb(128,211,211)");
  drawDigitalClock();
  clock();
  
  
}

function setClockBackgroundColor(color) {
  noStroke();
  fill(color);
  rect(0, 0, 400, 400);
  stroke("white");
  strokeWeight(3);
  rect(10, 10, 380, 380);
}

function drawDigitalClock() {
  let h = hour();
  let m = minute();
  let s = second();
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;

  fill("white");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ":" + nf(s, 2) + " " + ampm, width / 2, height / 2);
}


function clock() {
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
  text("🕰️", 200,100);
  
}