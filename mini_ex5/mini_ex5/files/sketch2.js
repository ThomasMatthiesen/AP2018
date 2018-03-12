let smiley = [];
let pressmouse;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(add);
}

function draw() {
  background(0);
 for (let i = 0; i <smiley.length; i++) {
  smiley[i].fall();
  smiley[i].display();
 }
}

function add() {
  append(smiley, new Smiley(random(-100,100), 1, 5, random(0, width), random(75, 150)));
}


class Smiley {
  constructor(mood, gravity, ypos, xpos, size) {
    this.getColor = color(0,0,0);
    this.mood = mood;
    this.gravity = gravity + size/35; // makes the biggest smileys fall faster
    this.ypos = ypos;
    this.xpos = xpos;
    this.size = size;
  }

  display() {
    if (this.mood < 1) {  // aligns color of smiley with the mood
      this.getColor = color(0,200,0);
    } else if (this.mood > 1 && this.mood < 50) {
      this.getColor = color(200,200,0);
    } else {
      this.getColor = color(200, 0, 0);
    }
    noStroke();
    fill(this.getColor); // color of smiley
    ellipse(this.xpos, this.ypos, this.size, this.size);  // body
    push();
    stroke(0);
    fill(0);
    ellipse(this.xpos-15, this.ypos-10, this.size/10, this.size/10);  // eyes
    ellipse(this.xpos+15, this.ypos-10, this.size/10, this.size/10);  // eyes
    curve(this.xpos-25,this.ypos+this.mood,this.xpos-25,this.ypos+20,this.xpos+25,this.ypos+20,this.xpos+25,this.ypos+this.mood); // mouth
    pop();
  }

  fall() {
    this.ypos += this.gravity; // fall-effect
    }
  }
