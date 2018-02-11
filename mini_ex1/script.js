var r
var g
var b
var c

function setup () {
  var canvas = createCanvas (1300, 750);
  background(255);
}

function draw () {
  var s = abs(winMouseX - pwinMouseX);
  var x = random(1300);
  var y = random(750);
  r = floor(mouseX / 4);
  g = floor(mouseY / 4);
  stroke(r, g, b);
  strokeWeight(s * 3);
  fill(r, g, b);
  ellipse(x, y, s, s/800);
  return false;
}

function mouseMoved() {
  if (b < 255) {
    b = b + 1;
  } else {
    b = 0;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    clear();
  }
}
