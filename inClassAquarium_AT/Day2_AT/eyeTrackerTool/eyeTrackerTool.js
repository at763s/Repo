let x, y, noiseOffset;
let eyeX = 100;
let eyeY = 100;

 

function setup() {
  createCanvas(800, 600);
  x = width / 2;
  y = height / 2;
  noiseOffset = 0;
}

 

function draw() {
  background(220);

  // Fish
  fill(255, 0, 0);
  ellipse(x, y, 50, 30);
  fill(200, 0, 0);
  triangle(x - 25, y, x - 50, y - 15, x - 50, y + 15);

  // Eyes
  fill(255);
  ellipse(eyeX, eyeY, 20, 20);
  ellipse(eyeX + 30, eyeY, 20, 20);

  // Pupils
  let angle = atan2(y - eyeY, x - eyeX);
  fill(0);
  ellipse(eyeX + cos(angle) * 5, eyeY + sin(angle) * 5, 10, 10);
  ellipse(eyeX + 30 + cos(angle) * 5, eyeY + sin(angle) * 5, 10, 10);

  // Fish movement
  x += map(noise(noiseOffset), 0, 1, -3, 3);
  y += map(noise(noiseOffset + 100), 0, 1, -3, 3);

  noiseOffset += 0.01;
}
