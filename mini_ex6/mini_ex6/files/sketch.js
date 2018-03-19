let x = 0;
let y = 15;
let spacing = 25;
let alphabet;
let topNumber = 26;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {

  alphabet = Alphabet('a', 'z');
  removeLetter();
  var r = floor(random(0,alphabet.length));
  var letter = alphabet[r];
  textSize(20);
  fill(255);
  colorVowels(letter, r, g, b);
  text(letter, x, y);
  x+=25;
  if (x > width) {
    x = 0;
    y += spacing;
  }
  if (y > height) {
    y = 0;
    x = 0;
  }

}

function Alphabet(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}



function colorVowels(letter) {
  switch (letter) {
    case 'a':
      fill(125,25,0);
      break;
    case 'e':
      fill(150,50,0);
      break;
    case 'i':
      fill(175,75,0);
      break;
    case 'o':
      fill(200,100,0);
      break;
    case 'u':
      fill(225,125,0);
      break;
    case 'y':
      fill(250,150,0);
      break;
    default:
      fill(255);
  }
}



function removeLetter() {
  if (keyIsDown(65)) {
    var remover = alphabet.indexOf("a");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(66)) {
    var remover = alphabet.indexOf("b");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(67)) {
    var remover = alphabet.indexOf("c");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(68)) {
    var remover = alphabet.indexOf("d");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(69)) {
    var remover = alphabet.indexOf("e");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(70)) {
    var remover = alphabet.indexOf("f");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(71)) {
    var remover = alphabet.indexOf("g");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(72)) {
    var remover = alphabet.indexOf("h");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(73)) {
    var remover = alphabet.indexOf("i");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(74)) {
    var remover = alphabet.indexOf("j");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(75)) {
    var remover = alphabet.indexOf("k");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(76)) {
    var remover = alphabet.indexOf("l");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(77)) {
    var remover = alphabet.indexOf("m");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(78)) {
    var remover = alphabet.indexOf("n");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(79)) {
    var remover = alphabet.indexOf("o");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(80)) {
    var remover = alphabet.indexOf("p");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(81)) {
    var remover = alphabet.indexOf("q");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(82)) {
    var remover = alphabet.indexOf("r");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(83)) {
    var remover = alphabet.indexOf("s");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(84)) {
    var remover = alphabet.indexOf("t");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(85)) {
    var remover = alphabet.indexOf("u");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(86)) {
    var remover = alphabet.indexOf("v");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(87)) {
    var remover = alphabet.indexOf("w");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(88)) {
    var remover = alphabet.indexOf("x");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(89)) {
    var remover = alphabet.indexOf("y");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }

  if (keyIsDown(90)) {
    var remover = alphabet.indexOf("z");
      if (remover != -1) {
	       alphabet.splice(remover, 1);
       }
  }
}
