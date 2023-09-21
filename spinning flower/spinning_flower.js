//array to store flowers
let flowers = [];

function setup() {
createCanvas(800,600);
strokeWeight(2);
}

function draw() {
  background(220);
  //drawin da flowers
  for(let flower of flowers){
    flower.angle += 0.02;
    if(flower.type === 'daisy'){
     drawDaisy(flower.x, flower.y, flower.size, flower.angle); 
    } else{
    drawTulip(flower.x, flower.y, flower.size, flower.angle);
    }
  }
}

//standard function called everytime a mouse click is registered
function mousePressed(){
 //create a flower at mouse position
 let flower = {
   x: mouseX,
   y: mouseY,
   size: random(20,50),
   type: random(1) < 0.5 ? 'daisy' : 'tulip',
   angle: 0
 };
 flowers.push(flower);
}

//drawDaisy custom function draws daisy at specific size, position, and rotation
function drawDaisy(x, y, size, angle){
 push();//saves current transform matrix 
 translate(x, y); //move origin to flowers position
 rotate(angle);
 //drawing actual daisy
 fill(255,255,0);
 ellipse(0,0,size,size);
 fill(255);
 for(let a = 0; a < TWO_PI; a += PI / 8){
   let px = cos(a) * size / 2;
   let py = sin(a) * size / 2;
   ellipse(px, py, size / 2, size / 2);
 }
 pop(); //restore norm matrix function
}

function drawTulip(x, y, size, angle){
 push();
 translate(x, y);
 rotate(angle);
 
 fill(255,0,0);
 for (let a = 0; a < TWO_PI; a += PI / 6){
   let px = cos(a) * size / 2;
   let py = sin(a) * size / 2;
   ellipse(px, py, size / 3, size / 2);
 }
 fill(0,128,0);
 rect(0 - size/20, 0, size /10, size/2);
 
 pop();
}
