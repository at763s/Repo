//imported assets
let girls = []
let numGirls = [1,2,3,4]
let girl;
let girlOne;
let girlTwo;
let girlThree;
let girlFour;
let hand;
let bg;

function preload(){
  girlOne = loadImage('data/girlOne.PNG')
  girlTwo = loadImage('data/girlTwo.PNG')
  girlThree = loadImage('data/girlThree.PNG')
  girlFour = loadImage('data/girlFour.PNG')
  hand = loadImage('data/cursor.png')
  bg = loadImage('data/Fin_2.png');
  
  //girls = [girlOne, girlTwo, girlThree, girlFour]
}

function setup() {
createCanvas(1920,1080)
noCursor();
}


function draw() {
background(bg)
//image(wall,0,0)

hand.resize(78,78)
image(hand,mouseX,mouseY)


if ((mouseX > 783) && (mouseX < 1480) && (mouseY > 276) && (mouseY < 965)){
  fashion();
}
 
//fill(25)
//text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

function fashion(){
  //girls = [girlOne, girlTwo, girlThree, girlFour]
  girl = random(numGirls)
  if (girl == 1){
    background(girlOne)
    //image(girlOne,0,0)
  }else if (girl == 2){
    background(girlTwo)
    //image(girlTwo,0,0) 
  }else if (girl == 3){
    background(girlThree)
    //image(girlThree,0,0) 
  }else if (girl == 4){
    background(girlFour)
    //image(girlFour,0,0) 
  }
hand.resize(78,78)
image(hand,mouseX,mouseY)
}
