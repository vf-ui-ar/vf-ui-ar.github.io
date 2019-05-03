
'use strict';

var tileCountX = 50;
var tileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {

  background(0, 0, 100);


  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  var counter = 0;

  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

   
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}

function keyPressed() {


  if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == '3') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == '4') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 0;
      saturationValues[i] = 0;
      brightnessValues[i] = random(100);
    }
  }

  if (key == '5') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == '6') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == '7') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '8') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180, 360);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == '9') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = random(360);
        saturationValues[i] = 100;
        brightnessValues[i] = random(100);
      } else {
        hueValues[i] = 195;
        saturationValues[i] = random(100);
        brightnessValues[i] = 100;
      }
    }
  }

  if (key == '0') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = 140;
        saturationValues[i] = random(30, 100);
        brightnessValues[i] = random(40, 100);
      } else {
        hueValues[i] = 210;
        saturationValues[i] = random(40, 100);
        brightnessValues[i] = random(50, 100);
      }
    }
  }

}
