function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  //background with transparancy
  background(0,0,35,25); 
     let r = random(255)
 let g = random(255)
 let b = random(255)
 fill(r,g,b)
  //blinking stars
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  
   for (let flower of flowers){
  flower.angle += 0.02;
  drawFlower(flower);
 }
}

let flowers = [];

let daisyImg;
let tulipImg;

function preload(){
 daisyImg = loadImage('space_pics/pochacco.png');
 tulipImg = loadImage('space_pics/Pompompurin-PNG.png');
}

function mousePressed(){
 let flower = {
  x: mouseX,
  y: mouseY,
  size: random(50,100),
  //add stars ??
  type: random(1) < 0.5 ? 'daisy' : 'tulip',
  angle: random(365)
 };
 flowers.push(flower);
}

function drawFlower(flower){
 push();
 translate(flower.x, flower.y);
 rotate(flower.angle);
 imageMode(CENTER);
 if (flower.type === 'daisy'){
  image(daisyImg,0,0, flower.size, flower.size);
 } else if (flower.type === 'tulip'){
  image(tulipImg,0,0, flower.size, flower.size);
 }
 pop();
}
