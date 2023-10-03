function setup() {
 createCanvas(800,800)
}


function draw() {
background (220);
//display mousex and mousey coordinates
fill(0);
textSize(16);
text(`mouse X is: ${mouseX}`, 10,20)
text(`mouse Y is: ${mouseY}`,10,40)


let rectWidth= map(mouseX, 0,width,10,100)
let rectHeight=map(mouseX, 0, height,10,100)

fill(100,200,255)
noStroke();
rectMode(CENTER);
rect(mouseX,mouseY,rectWidth,rectHeight)
}
