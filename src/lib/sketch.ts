'use client';

import p5Types from 'p5';

let canvasParent: Element;
let parentStyle: CSSStyleDeclaration;
let canvasWidth: number, canvasHeight: number;
let points = [];
let multiplier: number;

var r1: number;
var r2: number;

const setup = (p5: p5Types, canvasParentRef: Element) => {
  canvasParent = canvasParentRef;
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement);
  } else {
    parentStyle = getComputedStyle(canvasParentRef);
  }

  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);

  p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  p5.noStroke();
  
  p5.angleMode(p5.DEGREES);
  p5.noiseDetail(1, 0.5);

  var density = 15;
  var space = canvasWidth / density;

  for (var x = 0; x < canvasWidth; x += space) {
        for (var y = 0; y < canvasHeight; y += space) {
            var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10));
            points.push(p);
        };
  }
  
  p5.shuffle(points, true);

  r1 = p5.random(255);
  r2 = p5.random(255);

  multiplier = p5.random(0.01, 0.02);
}

const draw = (p5: p5Types) => {
    p5.noStroke();

    if (p5.frameCount * 3 <= points.length) {
        var max = p5.frameCount * 3;
    } else {
        var max = points.length;
    }

    if (p5.mouseIsPressed) {
        points.push(p5.createVector(p5.mouseX, p5.mouseY));
    }

    for (var i = 0; i < max; i++) {
        var r = p5.map(points[i].x, 0, canvasWidth, r1, r2);
        var g = r;
        var b = r;
        var alpha = p5.map(p5.dist(canvasWidth / 2, canvasHeight / 2, points[i].x, points[i].y), 0, 250, 355, 0);

        p5.fill(r, g, b, alpha);

        var angle = p5.map(p5.noise(points[i].x * multiplier, points[i].y * multiplier), 0, 1, 0, 720);

        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

        if (p5.dist(canvasWidth / 2, canvasHeight / 2, points[i].x, points[i].y) < 250) {
          p5.ellipse(points[i].x, points[i].y, 1);
        }
    }
}

export { setup, draw }