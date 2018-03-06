var video;
var time = 0;
var inp;
var infoAmount = 10;

function setup() {
  video = createVideo("media/cats.mp4"); // creates video
  createP('Please fill in personal data to continue watching this awesome cat video'); // creates paragraph
  inp = createInput(''); //creates input box
  inp.input(myInputEvent);
  inp.size(635, 100);
}

function draw() {
  video.play();
  time = time + 1; // timer
  if (time >= 500) { // makes video stop when time reach 500
    video.pause();
  }
}

function myInputEvent() {
  if (this.value().length > infoAmount) { // runs when the data reaches the required amount
    time = 0; // resets the timer function
    infoAmount = infoAmount + 10;  // increases the amount of data required for the video to continue
  }
}
