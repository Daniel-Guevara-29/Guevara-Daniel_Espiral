let angle = 0;
let spacing = 10;
let totalPoints = 100; // Cambiar la cantidad de puntos en la espiral

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  let radius = 10;
  let hue = 0;

  for (let i = 0; i < totalPoints; i++) {
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;
    let diameter = map(i, 0, totalPoints, 1, 10); // Tamaño de los puntos de menor a mayor

    let saturation = map(radius, 0, 400, 100, 50);
    let brightness = map(radius, 0, 400, 100, 80);

    fill(hue % 360, saturation, brightness);
    ellipse(x, y, diameter, diameter);

    hue += 1; // Cambio de color para cada punto
    radius += spacing;
    angle += 0.009;
  }
}
