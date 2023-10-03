let spacing;

function setup() {
createCanvas(800,800);
noLoop();
}

function draw() {
background(220);

spacing = map(mouseX,0,width,10,40);
let slashAngle = map(mouseY,0,height,0,PI);

for (let x = 0; x < width; x += spacing){
 for(let y = 0; y < height; y += spacing){
  push();
  translate (x,y);
  if (random(1) > 0.5 ){
   rotate(slashAngle);
   line(0,-spacing / 2, 0, spacing / 2);
  }else {
   rotate(-slashAngle);
   line(0,-spacing / 2, 0, spacing / 2);
  }
  pop();
 }
}
}

function mouseMoved(){
 redraw(); 
}
