let angle = 0;
let spacing = 3;
let totalPoints = 100;
let numSpirals = 10;
let direction = 1;
let rotationSpeed = 0.009;
let prevMouseX;
let prevMouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function draw() {
  background(0); // Limpia el lienzo en cada fotograma
  let startRadius = 20;
  let mouseXRatio = mouseX / width;
  let mouseYRatio = mouseY / height;

  let mouseXDelta = mouseX - prevMouseX; // Cambio en la posición X del ratón
  let mouseYDelta = mouseY - prevMouseY; // Cambio en la posición Y del ratón

  for (let j = 0; j < numSpirals; j++) {
    let hue1 = map(mouseXRatio, 0, 1, 0, 360);
    let hue2 = (hue1 + 180) % 360;

    let centerX = map(mouseXRatio, 0, 1, startRadius, width - startRadius);
    let centerY = map(mouseYRatio, 0, 1, startRadius, height - startRadius);

    let radius = startRadius + j * 20;

    for (let i = 0; i < totalPoints; i++) {
      let x = centerX + cos(angle) * radius;
      let y = centerY + sin(angle) * radius;
      let diameter = map(i, 0, totalPoints, 1, 5);

      let hue = map(i, 0, totalPoints, hue1, hue2);
      let saturation = map(
        radius,
        startRadius,
        startRadius + (numSpirals - 1) * 20,
        100,
        80
      );
      let brightness = map(
        radius,
        startRadius,
        startRadius + (numSpirals - 1) * 20,
        100,
        80
      );

      let alpha = map(i, 0, totalPoints, 255, 0); // Controla la opacidad
      fill(hue, saturation, brightness, alpha);
      ellipse(x, y, diameter, diameter);

      angle += rotationSpeed * direction;
      radius += spacing;
    }
  }

  // Actualizar la posición anterior del ratón
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function mouseClicked() {
  direction *= -1; // Invertir la dirección de la espiral al hacer clic
}
