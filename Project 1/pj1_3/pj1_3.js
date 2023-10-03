let button;
let button2;

//let hooked = [];

function preload(){
 let fishIMG = loadImage('data/fish.png')
 let bootIMG = loadImage('data/boot.png')
}

function setup() {
createCanvas(1280,720)
background(192, 237, 236)

let hooked = {
 x: 640,
 y: 360,
 size: random(100,150),
 type: random(1) < 0.5 ? 'fishIMG' : 'bootIMG',
 angle:0
}

button = createButton('Fish')
button.position(20,580)
button.mousePressed(drawHooked)

button2 = createButton ('Home')
button2.position(20,600)
button2.mousePressed(home)
}

function fish(){
  imageMode(CENTER)
  image(hooked)
}

function home(){
 background (192, 237, 236)
}

function draw(home) {
 fill(133, 109, 72)
 ellipse(850,425,150,50)
  
  fill(171, 143, 99)
 noStroke();
 ellipse(900,300,200,200)
 ellipse(900,450,150,250)
 ellipse(900,500,175,175)
 
 stroke(133, 109, 72)
 strokeWeight(2)
 ellipse(825,550,225,75)
 ellipse(825,450,150,50)
}

function drawHooked(hooked){
 push();
 imageMode(CENTER)
 if (hooked.type === 'fishIMG'){
  image(fishIMG,0,0,hooked.size,hooked.size) 
 }else if (hooked.type === 'bootIMG'){
  image(bootIMG,0,0,hooked.size,hooked.size) 
 }
 pop();
}
