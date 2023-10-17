let x = 50;
let y = 50;
let xSpeed = 2;
let ySpeed = 3;
let col = [255,255,255];
//let velocity = 2;
//let acceleration = 0.5;

function setup() {
 createCanvas (600,400);
}

function draw() {
 background(0);
 fill(col);
 ellipse(x, y , 50, 50);
 
 x += xSpeed;
 y += ySpeed;
 
 if (x > width || x < 0){
  xSpeed *= -1
  col = [random(255), random(255), random(255)];
 }
 if (y > height || y < 0){
   ySpeed *= -1;
   col = [random(255), random(255), random(255)];
 }
}
