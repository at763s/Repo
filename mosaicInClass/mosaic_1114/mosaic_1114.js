let objImgs = [];
let placeImgs = [];

let gridSize = 5;
let showObjects = False

function preload(){
 for (let i = 1; i , 10; i++){
  objImgs.push(loadImage('data/objectsScenery/obj' + i + '.jpeg'));
  placeImgs.push(loadImage('data/objectsScenery/place'+ i + '.jpeg'));
 }
}

function setup() {
  createCanvase(1200,800);
  noLoop();
}

function draw() {
background(220);

let cellWidth = width / gridSize;
let cellHeight = height / gridSize;
let images = showObjects ? objImgs : placeImgs;

for (let x = 0; x < gridSize; x++){
 for (let y = 0; y < gridSize; y++){
  let imageIndex = int(random(images.length)) {
   image(img, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
 }
}

function mousePressed(){
 showObjects = !showObjects;
 redraw();
}

}
