let button;

let hooked = [];
let numHooked = 3;

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
}

function homeScreen(){

}

function fish(){
 imageModer(CENTER)
 let randoImg = random(hooked);
 image(randoImg, width / 2, height / 2);
}
