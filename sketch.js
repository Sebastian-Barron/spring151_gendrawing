let t = 0;
let circles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  for(let i = 0; i < 150; i++){
    circles.push(new Shake());
    }
}

function draw() {
  background(0, 15); 
  if(keyIsPressed === true){
    background(64,64,64);
  }
  shakingCircle = fill(0,0,0);
  for (let i = 0;i < circles.length; i++){
    circles[i].move();
    circles[i].display();
    }
  lightSquare = fill(128, 184, 255);
  if(keyIsPressed === true){
    //erase();
    lightSquare = fill(64,64,64);

  }
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  darkerSquare = fill(9, 82,141);
  if(keyIsPressed === true){
    //erase();
    darkerSquare = fill(64,64,64);
  }
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 5, inverseY / 2 + 5);
  
  seaFill =  fill(9,100,180);
  if(keyIsPressed === true){
    seaFill = fill(64,64,64);
  }
  
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      
      const xAngle = map(mouseX, 0, width, -10* PI, 8 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 8 * PI, true);
  
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 7);
    }
  }

  t = t + 0.009; 
}

class Shake {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(40, 50);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}