let button;

let hooked = [];
let numHooked = 3;

let state = 0

function preload(){
 let fishIMG = loadImage(data/fish.png)
 let bootIMG = loadImage(data/boot.png)
 let stikIMG = loadImage(data/stick.png)
 let hooked = [fishIMG,bootIMG,stikIMG];
}

function setup() {
createCanvas(1280,720)
background(255)
noLoop();

button = createButton('Fish')
button.position(960,700)
button.mousePressed(fish)

button2 = createButton('Again?')
button2.position(960,700)
button2.mousePressed(homeScreen)
}

function draw() {
  if (state === 0){
    button.show();
    button2.hide();
    button3.hide();
   //bear fishing here 
  }
  else if (state === 1){
   imageMode(CENTER)
   image(bootIMG)
   button.hide();
   button2.show();
  }
  else if (state === 2){
   imageMode(CENTER)
   image(stikIMG)
   button.hide();
   button2.show();
  }
  else if (state === 3){
   imageMode(CENTER)
   image(fishIMG)
   button.hide();
   button2.show(); 
  }
}

function homeScreen(){
  state = 0
}

function fish(){
 state = (state + 1) % 4;
}