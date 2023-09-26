let button;
let button2;

function setup() {
createCanvas(400,400);

//create buttons
button = createButton('Change Background');
button.position(20,20);
button.mousePressed(changeBG);

button2 = createButton('Draw Circle');
button2.position(20,50);
button2.mousePressed(drawCircle);
}

function draw() {
}

function changeBG(){
 let col = color(random(255),random(255),random(255));
 background(col);
}

function drawCircle(){
 fill(random(255),random(255),random(255))
 ellipse(random(width),random(height),random(10,50),random(10,50))
}
