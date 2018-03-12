var speed = 0;

function setup() {
  createCanvas(500,500);
  background(200);
}

function draw() {
  background(250);
  speed = speed +2;
  if (speed > 575) {
    speed = -220;
  }
  createBike(speed, 100);
}

function createBike(x, y) {
  function createWheel(x,y) {
    push();
    translate(x, y);
    rotate(radians(frameCount));
  	for (var i = 0; i < 20; i++) {
  		push();
      stroke(0);
      noFill();
      push();
      strokeWeight(4);
      ellipse(0,0,100,100);
      pop();
      noFill();
      ellipse(0,0,90,90);
      fill(0);
      ellipse(0,0,6,6);
      rotate(TWO_PI * i / 18);
      line(0,0,45,0);
  		pop();
    }
    pop();
  }
  createWheel(x, y+150);
  createWheel(x+160, y+150);
  push();
  strokeWeight(2);
  line(x,y+150,x+45,y+95);
  strokeWeight(3);
  line(x,y+150,x+60,y+160);
  line(x+60, y+160, x+40, y+75);
  strokeWeight(4);
  line(x+60, y+160, x+135, y+90);
  strokeWeight(4);
  line(x+45, y+95, x+132, y+82);
  strokeWeight(4);
  line(x+129, y+75, x+160, y+150);
  pop();
  fill(0);
  triangle(x+40, y+75, x+26, y+66, x+65, y+65);
  noFill();
  push();
  strokeWeight(4);
  bezier(x+129, y+75, x+129, y+60, x+135, y+60, x+150, y+60);
  strokeWeight(4);
  bezier(x+150, y+60, x+175, y+60, x+160, y+85, x+140, y+90);
  pop();
}
