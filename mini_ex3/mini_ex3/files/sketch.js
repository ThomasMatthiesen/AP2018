// Variables for first box:
var xr = 100;
var xl = 100;
var yr = 100;
var yl = 100;
var move = 4;

// Variables for second box:
var xr2 = 120;
var xl2 = 120;
var yr2 = 100;
var yl2 = 100;
var move2 = 3;

// Variables for third box:
var xr3 = 200;
var xl3 = 200;
var yr3 = 100;
var yl3 = 100;
var move3 = 2;

// Variables for fourth box:
var xr4 = 80;
var xl4 = 80;
var yr4 = 280;
var yl4 = 280;
var move4 = 1;

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(255);

  // FIRST BOX
  var r = floor(random(8)); // whirly effect
  stroke(240, 192, 149); // color of line
  strokeWeight(0.5);
  line(xl, yl, xr, yr); // main line
  line(xl+r, yl, xr+r, yr); // whirly effect
  line(xl-r, yl, xr-r, yr); // whirly effect
  line(xl, yl, xr, yr); // whirly effect

  xr = xr + move;
  if (xr > 300) {
    xr = 300;
    xl = xl + move;
  }
  if (xl > 300) {
    xl = 300;
    yr = yr + move;
  }
  if (yr > 300) {
    yr = 300;
    yl = yl + move;
  }
  if (yl > 300) {
    yl = 300;
    move = move * -1;
  }
  if (xr < 100) {
    xr = 100;
    xl = xl + move;
  }
  if (xl < 100) {
    xl = 100;
    yr = yr + move;
  }
  if (yr < 100) {
    yr = 100;
    yl = yl + move;
  }
  if (yl < 100) {
    yl = 100;
    move = 4;
  }

  // SECOND BOX
  var r = floor(random(4)); // whirly effect
  stroke(0, 192, 149); // color of line
  strokeWeight(1);
  line(xl2, yl2, xr2, yr2); // main line
  line(xl2+r, yl2, xr2+r, yr2); // whirly effect
  line(xl2-r, yl2, xr2-r, yr2); // whirly effect
  line(xl2, yl2, xr2, yr2); // whirly effect

  xr2 = xr2 + move2;
  if (xr2 > 180) {
    xr2 = 180;
    xl2 = xl2 + move2;
  }
  if (xl2 > 180) {
    xl2 = 180;
    yr2 = yr2 + move2;
  }
  if (yr2 > 300) {
    yr2 = 300;
    yl2 = yl2 + move2;
  }
  if (yl2 > 300) {
    yl2 = 300;
    move2 = move2 * -1;
  }
  if (xr2 < 100) {
    xr2 = 100;
    xl2 = xl2 + move2;
  }
  if (xl2 < 100) {
    xl2 = 100;
    yr2 = yr2 + move2;
  }
  if (yr2 < 100) {
    yr2 = 100;
    yl2 = yl2 + move2;
  }
  if (yl2 < 100) {
    yl2 = 100;
    move2 = 3;
  }


  // THIRD BOX
  var r = floor(random(3)); // whirly effect
  stroke(155, 22, 255); // color of line
  strokeWeight(1.5);
  line(xl3, yl3, xr3, yr3); // main line
  line(xl3+r, yl3, xr3+r, yr3); // whirly effect
  line(xl3-r, yl3, xr3-r, yr3); // whirly effect
  line(xl3, yl3, xr3, yr3); // whirly effect

  xr3 = xr3 + move3;
  if (xr3 > 300) {
    xr3 = 300;
    xl3 = xl3 + move3;
  }
  if (xl3 > 300) {
    xl3 = 300;
    yr3 = yr3 + move3;
  }
  if (yr3 > 300) {
    yr3 = 300;
    yl3 = yl3 + move3;
  }
  if (yl3 > 300) {
    yl3 = 300;
    move3 = move3 * -1;
  }
  if (xr3 < 150) {
    xr3 = 150;
    xl3 = xl3 + move3;
  }
  if (xl3 < 150) {
    xl3 = 150;
    yr3 = yr3 + move3;
  }
  if (yr3 < 150) {
    yr3 = 150;
    yl3 = yl3 + move3;
  }
  if (yl3 < 150) {
    yl3 = 150;
    move3 = 2;
  }


  // FOURTH BOX
  var r = floor(random(2)); // whirly effect
  stroke(0, 150, 255); // color of line
  strokeWeight(2);
  line(xl4, yl4, xr4, yr4); // main line
  line(xl4+r, yl4, xr4+r, yr4); // whirly effect
  line(xl4-r, yl4, xr4-r, yr4); // whirly effect
  line(xl4, yl4, xr4, yr4); // whirly effect

  xr4 = xr4 + move4;
  if (xr4 > 280) {
    xr4 = 280;
    xl4 = xl4 + move4;
  }
  if (xl4 > 280) {
    xl4 = 280;
    yr4 = yr4 + move4;
  }
  if (yr4 > 300) {
    yr4 = 300;
    yl4 = yl4 + move4;
  }
  if (yl4 > 300) {
    yl4 = 300;
    move4 = move4 * -1;
  }
  if (xr4 < 80) {
    xr4 = 80;
    xl4 = xl4 + move4;
  }
  if (xl4 < 80) {
    xl4 = 80;
    yr4 = yr4 + move4;
  }
  if (yr4 < 150) {
    yr4 = 150;
    yl4 = yl4 + move4;
  }
  if (yl4 < 150) {
    yl4 = 150;
    move4 = 1;
  }
}
