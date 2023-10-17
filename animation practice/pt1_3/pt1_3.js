let x = 50;
let velocity = 2;
let acceleration = 0.5;

function setup() {
 createCanvas (600,400);
}

function draw() {
 background(0);
 fill(255);
 ellipse(x, height/2 , 50, 50);
 
 if (mouseIsPressed){
  velocity += acceleration; 
 }
 
 x += velocity;
 
 if (x > width || x < 0){
  velocity *= -1; 
 }
 if (velocity < 0){
  acceleration *= -1; 
 }
}
