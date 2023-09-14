let flowers = [];

let daisyImg;
let tulipImg;

function preload(){
 daisyImg = loadImage('data/daisy.png');
 tulipImg = loadImage('data/tulip.png');
}

function setup() {
createCanvas(800,600);
}

function draw() {
 background(220);
 for (let flower of flowers){
  flower.angle += 0.02;
  drawFlower(flower);
 }
}

function mousePressed(){
 let flower = {
  x: mouseX,
  y: mouseY,
  size: random(20,70),
  type: random(1) < 0.5 ? 'daisy' : 'tulip',
  angle:0
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
 } else{
  image(tulipImg,0,0, flower.size, flower.size);
 }
 pop();
}
