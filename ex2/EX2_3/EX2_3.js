let daisyImg;
let tulipImg;

function preload(){
 daisyImg = loadImage('space_pics/pochacco.png');
 tulipImg = loadImage('space_pics/Pompompurin-PNG.png');
}

let shapes = ['daisy','tulip','triangle'];

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
}

function mousePressed(){
  let chosenShape = random(shapes);
push();
  let x = random(width);
  let y = random(height);
  let size = random(10,50);
  
 let r = random(255)
 let g = random(255)
 let b = random(255)
 fill(r,g,b)

 imageMode(CENTER);
 
  if (chosenShape === 'daisy'){
    daisyImg(x,y,size,size);
  }else if (chosenShape === 'tulip'){
    tulipIMG(x,y,size,size);
  }else if (chosenShape === 'triangle'){
    triangle(x,y,x+size/2,y-size,x+size,y);
  }
  pop();
}
