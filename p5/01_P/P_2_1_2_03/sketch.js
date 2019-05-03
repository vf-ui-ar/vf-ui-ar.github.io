
'use strict';
import org.openkinect.processing.*;


var tileCount = 20;

var moduleColor;
var moduleAlpha = 180;
var maxDistance = 500;

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(3);
  moduleColor = color(0, 0, 0, moduleAlpha);
  kinect = new Kinect(this);
  tracker = new KinectTracker();
}

function draw() {
  clear();
  tracker.track();
  v1 = tracker.getPos();
  stroke(moduleColor);

  for (var gridY = 0; gridY < width; gridY += 25) {
    for (var gridX = 0; gridX < height; gridX += 25) {
      var diameter = dist(v1.x, v1.y, gridX, gridY);
      diameter = diameter / maxDistance * 40;
      push();
      translate(gridX, gridY, diameter * 5);
      ellipse(0, 0, diameter, diameter);
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
