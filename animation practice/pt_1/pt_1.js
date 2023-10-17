let x = 50;
let y = 50;
let xSpeed = 2;
let ySpeed = 3;

function setup() {
 createCanvas (600,400);
}

function draw() {
 background(0);
 fill(255);
 ellipse(x, y, 50, 50);
 
 x += xSpeed;
 y += ySpeed;
 
 if (x > width || x < 0){
  xSpeed *= -1; 
 }
 if (y > height || y < 0){
  ySpeed *= -1 
 }
}
