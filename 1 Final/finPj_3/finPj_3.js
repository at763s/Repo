// Imported assets
let girlImages = [];
let currentGirlImage; // Stores the currently displayed image
let hand;
let bg;
let isMouseOverClothes = false; // Track if the mouse is over the clothes area
 
function preload() {
  girlImages = [
    loadImage('data/girlOne.PNG'),
    loadImage('data/girlTwo.PNG'),
    loadImage('data/girlThree.PNG'),
    loadImage('data/girlFour.PNG')
  ];
  hand = loadImage('data/cursor.png');
  bg = loadImage('data/Fin_2.png');
}
 
function setup() {
  createCanvas(1920, 1080);
  noCursor();
  currentGirlImage = bg; // Initialize with the background image
}
 
function draw() {
  background(bg);
 
  // Check if the mouse is in the active area
  if ((mouseX > 783) && (mouseX < 1480) && (mouseY > 276) && (mouseY < 965)) {
    if (!isMouseOverClothes) {
      isMouseOverClothes = true; // Mouse has entered the area
      currentGirlImage = random(girlImages); // Select a new image
    }
  } else {
    if (isMouseOverClothes) {
      isMouseOverClothes = false; // Mouse has left the area
    }
  }
 
  image(currentGirlImage, 0, 0); // Draw the currently selected image
 
  hand.resize(78, 78);
  image(hand, mouseX, mouseY); // Redraw the hand cursor on top
}
