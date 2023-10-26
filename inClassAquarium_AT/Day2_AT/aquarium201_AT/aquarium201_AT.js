let velocity = -2;
let eyeX = 50;
let eyeY = 50;

let fishX = 75
let fishY = 50
let fishTwoP = 400
//let FTX = 400
//let FTY = 300
//image(x,-width) to flip horizontal

function setup() {
createCanvas(900,600);
background (6, 115, 143);
}

function draw() {
  noStroke();
  
 //CAT
 fill(201, 133, 30)
 beginShape();
 vertex(150,500)
 vertex(150,300)
 vertex(200,350)
 vertex(350,350)
 vertex(400,300)
 vertex(400,500)
 endShape(CLOSE)
 //orbs
 fill(225)
 ellipse(225,415,50,50)
 ellipse(325,415,50,50)
 fill(10)
 ellipse(225,415,30,30)
 //ellipse(215,415,30,30) LL bounds
 //ellipse(235,415,30,30) LR bounds
 ellipse(325,415,30,30)
 //ellipse(315,415,30,30) RL bounds
 //ellipse(335,415,30,30) RR bounds
 //mouth
 strokeWeight(3)
 stroke(79, 54, 17)
 line(275,457,300,475)
 line(275,457,250,475)
 //nose
 noStroke();
 fill(245, 201, 228)
 ellipse(275,450,40,20)
 //might have to make own function to animate
 
 noStroke();
 //back tank wall
 fill(145, 186, 196,127)
 rect(75,0,825,500)
 //side tank walls
 fill(167, 205, 214)
 rect(0,0,75,600)
 rect(825,0,900,600)
 
 //FISH TWO/THREE
 let fishTwo = fill(219, 151, 50);triangle(fishTwoP,300,fishTwoP+60,325,fishTwoP+60,275);fill(245, 172, 64);ellipse(fishTwoP,300,75,50);fill(240);ellipse(fishTwoP-20,300,20,20);fill(10);ellipse(fishTwoP-20,300,15,15);fill(240);ellipse(fishTwoP-17,295,5,5);
 fishTwoP += velocity;
 if (fishTwoP > 845 || fishTwoP < 350){
  velocity *= -1; fishTwo.rotate(180/fishTwo)
 }
 
 //sand
 fill(235, 216, 148);
 quad(0,600,75,500,825,500,900,600);
}
