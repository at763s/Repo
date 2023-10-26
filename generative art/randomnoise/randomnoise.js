let movers = [];

function setup() {
 createCanvas(1280,720);
 background(0);
 
 for (let i = 0; i < 50; i++){
   movers.push(new Mover());
 }
}


function draw() {
 background(0,20);
 
 for (let mover of movers){
  mover.update();
  mover.show();
 }
 
}

class Mover{
 
  constructor(){
    this.x = random(width)
    this.y = random(height)
    this.xoff = random(1000)
    this.yoff = random(2000,3000)
  }
  update(){
   this.x = map(noise(this.xoff),0,1,0,width);
   this.y = map(noise(this.yoff),0,1,0,height);
   this.xoff += 0.01;
   this.yoff += 0.01;
  }
  show(){
   let r = random (255);
   let g = random (255) ;
   let b = random (255) ;
   let s = random (10,40);
   
   noStroke();
   fill(r,g,b,150);
   ellipse(this.x, this.y,s);
  }
}
