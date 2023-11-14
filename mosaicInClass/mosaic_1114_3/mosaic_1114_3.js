let objImgs = [];
let placeImgs = [];
let gridSize = 5;
let showObjects = false
let lastUpdateTime = 0;
let updateInterval = 1000;

let grid = [];

function preload(){
 for (let i = 1; i , 10; i++){
  objImgs.push(loadImage('data/objectsScenery/obj' + i + '.jpeg'));
  placeImgs.push(loadImage('data/objectsScenery/place'+ i + '.jpeg'));
 }
}

function setup() {
  createCanvase(1200,800);
  initGrid();
}

function draw() {
background(220);

 let currentTime = millis();
 if (currentTime - lastUpdateTime > updateInterval){
  updateSingleImage();
  lastUpdateTime = currentTime;
 }
 displayGrid();
}

function initGrid(){
 for (let x = 0; x < gridSize; x++){
  grid [x] = [] 
  for (let y = 0; y < gridSize; y++){
   grid [x][y] = random(placeImgs); 
  }
 }
}

function updateSingleImage(){
 let x = int(random(gridSize));
 let y = int(random(gridSize));
 let images = showObjects ? objImgs : placeImgs;
 grid[x][y] = random(images);
}

function displayGrid(){
 cellWidth = width / gridSize;
 cellHeight = height / gridSize;
 
 for (let x = 0; x < gridSize; x++){
  for (let y = 0; y < gridSize; y++){
   image(grid[x][y], x * cellWidth, y * cellHeight, cellWidth, cellHeight); 
  }
 }
}

function mousePressed(){
 showObjects = !showObjects;
 updateGrid();
}

function updateGrid(){
let images = showObjects ? objImgs : placeImgs;
 for (let x = 0; x < gridSize; x++){
  for (let y = 0; y < gridSize; y++){
    grid[x][y] = random(images);
  }
 }
}
