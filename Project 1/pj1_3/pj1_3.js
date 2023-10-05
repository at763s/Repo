let button;
let button2;

//let hooked = [];

function preload(){
 let fishIMG = loadImage('assets/fish.png');
 let bootIMG = loadImage('assets/boot.png');
 let hookMouse = loadImage('assets/hookMouse.png');
}

function setup() {
createCanvas(1280,720);
background (192, 237, 236);

let hooked = {
 x: random(50,1230),
 y: random(50,670),
 size: random(100,150),
 type: random(1) < 0.5 ? 'fishIMG' : 'bootIMG',
 angle:0
}

let col = color(140,179,105);

button = createButton('Fish');
button.position(50,475);
button.size(100,75);
button.style('font-size','30px');
button.style('color', '#fffdf7');
button.style('background-color', col);
button.mousePressed(drawHooked);

button2 = createButton ('Home');
button2.position(50,575);
button2.size(100,75);
button2.style('font-size','30px');
button2.style('color', '#fffdf7');
button2.style('background-color', col);
button2.mousePressed(home);
}

function home(draw){

}

function draw(home) {
  //lake
 noStroke();
 fill(39, 97, 161);
 rect(0,600,1300,400);
   //dock
 noStroke();
 fill(77, 57, 37);
 rect(765,500,600,150);
 
 rect(800,500,50,250);
 rect(875,500,50,175);
  //bear
  noStroke();
 fill(133, 109, 72);
 ellipse(850,425,150,50);
 ellipse(850,525,225,75);
 
 ellipse(950,225,75,75);
 
  fill(171, 143, 99);
 noStroke();
 ellipse(900,300,200,200);
 ellipse(900,450,150,250);
 ellipse(900,500,175,175);
 
 stroke(133, 109, 72);
 strokeWeight(2);
 ellipse(825,550,225,75);
 ellipse(825,450,150,50);
 
 fill(133, 109, 72);
 ellipse(825,250,75,75);
 ellipse(990,540,50,50);
 //fishing pole
 stroke(77, 57, 37);
 strokeWeight(7);
 line(800,425,650,250);
 
 stroke(250);
 strokeWeight(2);
 line(645,250,650,675);
 //sun
 fill(242, 217, 59);
 strokeWeight(5);
 stroke(255, 217, 116);
 ellipse(100,100,200,200);
 line(200,200,275,275);
 line(225,100,300,125);
 line(100,225,125,300);
 //fake fish
 fill(255, 217, 116);
 ellipse(1100,450,40,150);
 noStroke();
 fill(255, 209, 39);
 triangle(1100,380,1135,350,1065,350);
 //bucket
 noStroke();
 fill(195);
 rect(1050,425,125,125);
 
 //cool mouse
 //fill(0); cursor("none");
 //image(hookMouse,mouseX,mouseY,20,30);
}

function drawHooked(hooked){
  push();
 imageMode(CENTER)
 if (hooked.type === 'fishIMG'){
  image(fishIMG,0,0,fishIMG.height/3, fishIMG.width/3)
 }else if (hooked.type === 'bootIMG'){
  image(bootIMG,0,0,bootIMG.height/3, bootIMG.width/3)
 }
 pop();
}

function fish(drawHooked){
  push();
 imageMode(CENTER)
 if (hooked.type === 'fishIMG'){
  image(fishIMG,0,0,fishIMG.height/3, fishIMG.width/3)
 }else if (hooked.type === 'bootIMG'){
  image(bootIMG,0,0,bootIMG.height/3, bootIMG.width/3)
 }
 pop();
}



//hook image source : https://images.vexels.com/media/users/3/264726/isolated/preview/ad19de99a162e6593cdbfb8018e02b4f-fish-hook-trash-icon.png
//fish image source : https://freepngimg.com/thumb/fish/10-fish-png-image.png
//boot image source : https://www.pngall.com/wp-content/uploads/7/Leather-Boot-PNG-High-Quality-Image.png
