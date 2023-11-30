//imported assets
let girlOne;
let girlTwo;
let girlThree;
let girlFour;
let wall;
let mirror;
let hand;

function preload(){
  girlOne = loadImage('data/girlOne.png')
  girlTwo = loadImage('data/girlTwo.png')
  girlThree = loadImage('data/girlThree.png')
  girlFour = loadImage('data/girlFour.png')
  wall = loadImage('data/wall.png')
  mirror = loadImage('data/mirror.png')
  hand = loadImage('data/cursor.png')
}

function setup() {
createCanvas(1920,1080)
//background(mirror)
//noCursor();
cursor(hand,mouseX,mouseY)
}


function draw() {
background(mirror)
//image(wall,0,0)
}
