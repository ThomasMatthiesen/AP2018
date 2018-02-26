var great = 
  x = 100,
  y = 200,
  xx = 300,
  yy = 400,
  show: function() {
    line(this.x, this.y, this.xx, this.yy);
  }
}

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background(200);
}
