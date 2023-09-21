function setup() {
  createCanvas(800,800);
  noCursor();
}

let flowers = ['daisy', 'tulip', 'star'];

let daisyImg;
let tulipImg;

function preload(){
 daisyImg = loadImage('data/pochacco.png');
 tulipImg = loadImage('data/Pompompurin-PNG.png');
}

function draw() {
  background(0,0,35,25); 
  //blinking stars
  //fill(255);
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  noStroke();
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
//flower animate stuff
 for (let flower of flowers){
  flower.angle += 0.02;
  drawFlower(flower);
 }
 //star animate
 let r = random(255)
 let g = random(255)
 let b = random(255)
 fill(r,g,b)
  push();
  translate(width * 0.8, height * 0.5);
  //rotate(frameCount / -200.0);
  angle = random(365)
  star(0, 0, 30, 70, 5);
  pop();
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

//star function from p5.js reference
star = function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    scale (0.7)
  }
  endShape(CLOSE);
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
 }else if (flower.type === 'star'){
   star(mouseX, mouseY, 5, 11.6, 5);
 }
 pop();
}
