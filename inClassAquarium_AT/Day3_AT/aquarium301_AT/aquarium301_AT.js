let velocity = -2;
let velocityTwo = -2.075
let velocityThree = -1.05
let eyeX = 50;
let eyeY = 50;

let direction;
let fishTwo;
let fishFour
let fishTwoP = 400
let fishFourP = 800
//image(x,-width) to flip horizontal?
let subButton;
let sub = loadImage('assets/sub.png')

function setup() {
createCanvas(900,600);
background (6, 115, 143);
angleMode(DEGREES);
let direction = 1

//subButton = createButton(sub);subButton.position(500,510);subButton.mousePressed(scuba);
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
 
  //sand
 fill(235, 216, 148);
 quad(0,600,75,500,825,500,900,600);
 
 //rock stack yo
 fill(148, 155, 156)
 ellipse(710,490,200,100)
 fill(160, 167, 168)
 ellipse(710,445,150,60)
 fill(171, 175, 176)
 ellipse(710,410,100,55)
 
 //submarine BUTTON
 
 //rect of sand
 
 
 //back seaweed
 stroke(61, 120, 84)
 strokeWeight(1)
 fill(73, 143, 100)
 triangle(75,510,95,295,115,510)
 triangle(100,525,125,280,150,525)
 triangle(55,535,75,315,95,535)
 triangle(130,540,145,300,160,540)
 
 noStroke();
 //FISH TWO/THREE
 push();
 angleMode(DEGREES)
 let fishTwo =fill(219, 151, 50);triangle(fishTwoP,300,fishTwoP+60,325,fishTwoP+60,275);fill(245, 172, 64);ellipse(fishTwoP,300,75,50);fill(240);ellipse(fishTwoP-20,300,20,20);fill(10);ellipse(fishTwoP-20,300,15,15);fill(240);ellipse(fishTwoP-17,295,5,5);
 translate(fishTwoP);
 fishTwo.scale(direction,1);
 fishTwoP += velocity
 if (fishTwoP > 845){
  velocity *= -1;
  fishTwo * direction
  //velocity * direction
 }else if(fishTwoP < 350){
   //print(fishTwoP.toString());translate(fishTwoP);fishTwo.rotate(180,[fishTwoP]);
   direction *= -1;
   velocity *= -1;
 }
 pop();
 
  //FISH FOUR
 push();
 angleMode(DEGREES)
 let fishFour = fill(182, 103, 194);triangle(fishFourP,200,fishFourP+60,225,fishFourP+60,175);fill(224, 135, 237);ellipse(fishFourP,200,75,50);fill(240);ellipse(fishFourP-20,200,20,20);fill(10);ellipse(fishFourP-20,200,15,15);fill(240);ellipse(fishFourP-17,195,5,5);
 fishFourP += velocityTwo;
 if (fishFourP > 825){
  velocityTwo *= -1;
 }else if(fishFourP < 50){
   translate(fishFourP)
   fishFour.rotate(180,[fishFour]);
   velocityTwo *= -1;
 }
 pop();

 //fish one
 //front seaweed
}
