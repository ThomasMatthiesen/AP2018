//images
  var foot;
  var needles;
  var lego;
  var shit;
  var footbath;
  var pebbles;
  var sand;

//music & sound
  var theme;
  var aw1;
  var aw2;
  var aw3;
  var aw4;
  var aw5;
  var aw6;
  var aw7;
  var aw8;
  var aw9;
  var aw10;
  var ad1;
  var ad2;
  var ad3;
  var ad4;
  var ad5;
  var ad6;
  var aa1;
  var aa2;
  var aa3;
  var aa4;
  var aa5;

//foot dimension
  var x;
  var y;
  var footW;
  var footH;


function preload() {
  // preload images
  foot = loadImage('media/foot.png');
  needles = loadImage('media/needles.jpg');
  lego = loadImage('media/lego.png');
  shit = loadImage('media/shit.png');
  footbath = loadImage('media/footbath.jpg');
  pebbles = loadImage('media/pebbles.jpg');
  sand = loadImage('media/sand.jpeg');

  // preload music & sounds
  // theme
  soundFormats('mp3', 'ogg');
  theme = loadSound('media/audio/tema');
  // AW
  aw1 = loadSound('media/audio/AV1.mp3');
  aw2 = loadSound('media/audio/AV2.mp3');
  aw3 = loadSound('media/audio/AV3.mp3');
  aw4 = loadSound('media/audio/AV4.mp3');
  aw5 = loadSound('media/audio/AV5.mp3');
  aw6 = loadSound('media/audio/AV6.mp3');
  aw7 = loadSound('media/audio/AV7.mp3');
  aw8 = loadSound('media/audio/AV8.mp3');
  aw9 = loadSound('media/audio/AV9.mp3');
  aw10 = loadSound('media/audio/AV10.mp3');
  // AD
  ad1 = loadSound('media/audio/AD1.mp3');
  ad2 = loadSound('media/audio/AD2.mp3');
  ad3 = loadSound('media/audio/AD3.mp3');
  ad4 = loadSound('media/audio/FANDEN1.mp3');
  ad5 = loadSound('media/audio/HELVEDE1.mp3');
  ad6 = loadSound('media/audio/CENTRALVARM1.mp3');
  // AA
  aa1 = loadSound('media/audio/Mm1.mp3');
  aa2 = loadSound('media/audio/Mm2.mp3');
  aa3 = loadSound('media/audio/Mm3.mp3');
  aa4 = loadSound('media/audio/BEHAGELIGT.mp3');
  aa5 = loadSound('media/audio/KYS.mp3');

}

function setup () {
  createCanvas (1100, 600);
  theme.setVolume(0.5);
  theme.play();
}

function draw () {
  // canvas setup
  background(255);
  // display images
  image(needles, 50, 50, 200, 200);
  image(lego, 50, 300, 350, 250);
  image(footbath, 350, 50, 220, 200);
  image(shit, 500, 350, 200, 200);
  image(pebbles, 800, 350, 250, 250);
  image(sand, 650, 50, 400, 250);
  // foot click animation
  x = mouseX - 70;
  y = mouseY - 50;
  image(foot, x, y, footW, footH);
  if (mouseIsPressed) {
    footW = 160;
    footH = 90;
  } else {
    footW = 180;
    footH = 100;
  }
}


// CLICK & PLAY SOUND

function mousePressed () {
  // needles click function
  if (mouseX > 50 && mouseX < 250 && mouseY > 50 && mouseY < 250) {
    var selector = floor(random(10));
    if (selector == 0) {
      aw1.play();
    } else if (selector == 1) {
      aw2.play();
    } else if (selector == 2) {
      aw3.play();
    } else if (selector == 3) {
      aw4.play();
    } else if (selector == 4) {
      aw5.play();
    } else if (selector == 5) {
      aw6.play();
    } else if (selector == 6) {
      aw7.play();
    } else if (selector == 7) {
      aw8.play();
    } else if (selector == 8) {
      aw9.play();
    } else if (selector == 9) {
      aw10.play();
    }
  }
  // lego click function
  if (mouseX > 50 && mouseX < 400 && mouseY > 300 && mouseY < 550) {
    var selector = floor(random(10));
    if (selector == 0) {
      aw1.play();
    } else if (selector == 1) {
      aw2.play();
    } else if (selector == 2) {
      aw3.play();
    } else if (selector == 3) {
      aw4.play();
    } else if (selector == 4) {
      aw5.play();
    } else if (selector == 5) {
      aw6.play();
    } else if (selector == 6) {
      aw7.play();
    } else if (selector == 7) {
      aw8.play();
    } else if (selector == 8) {
      aw9.play();
    } else if (selector == 9) {
      aw10.play();
    }
  }
  // footbath click function
  if (mouseX > 350 && mouseX < 570 && mouseY > 50 && mouseY < 250) {
    var selector = floor(random(5));
    if (selector == 0) {
      aa1.play();
    } else if (selector == 1) {
      aa2.play();
    } else if (selector == 2) {
      aa3.play();
    } else if (selector == 3) {
      aa4.play();
    } else if (selector == 4) {
      aa5.play();
    }
  }
  // shit click function
  if (mouseX > 500 && mouseX < 700 && mouseY > 350 && mouseY < 550) {
    var selector = floor(random(6));
    if (selector == 0) {
      ad1.play();
    } else if (selector == 1) {
      ad2.play();
    } else if (selector == 2) {
      ad3.play();
    } else if (selector == 3) {
      ad4.play();
    } else if (selector == 4) {
      ad5.play();
    } else if (selector == 5) {
      ad6.play();
    }
  }
  // pebbles click function
  if (mouseX > 800 && mouseX < 1050 && mouseY > 350 && mouseY < 600) {
    var selector = floor(random(10));
    if (selector == 0) {
      aw1.play();
    } else if (selector == 1) {
      aw2.play();
    } else if (selector == 2) {
      aw3.play();
    } else if (selector == 3) {
      aw4.play();
    } else if (selector == 4) {
      aw5.play();
    } else if (selector == 5) {
      aw6.play();
    } else if (selector == 6) {
      aw7.play();
    } else if (selector == 7) {
      aw8.play();
    } else if (selector == 8) {
      aw9.play();
    } else if (selector == 9) {
      aw10.play();
    }
  }
  // sand click function
  if (mouseX > 650 && mouseX < 1050 && mouseY > 50 && mouseY < 300) {
    var selector = floor(random(5));
    if (selector == 0) {
      aa1.play();
    } else if (selector == 1) {
      aa2.play();
    } else if (selector == 2) {
      aa3.play();
    } else if (selector == 3) {
      aa4.play();
    } else if (selector == 4) {
      aa5.play();
    }
  }
}
