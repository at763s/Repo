let button;

let hooked = [fishIMG,bootIMG,stikIMG];

function preload(){
 let fishIMG = loadImage(data/fish.png)
 let bootIMG = loadImage(data/boot.png)
 let stikIMG = loadImage(data/stick.png)
}

function setup() {
createCanvas(1280,720)
background(255)

button = createButton('Fish')
button.position(960,700)
button.mousePressed(fish)
}

function draw() {
  
}

function fish(){
 if(hooked === fishIMG){
  fishIMG (600,180,250,250) 
 }else if(hooked === bootIMG){
  bootIMG (600,180,250,250)
 }else if(hooked === stikIMG){
  stikIMG (600,180,250,250) 
 }
}
