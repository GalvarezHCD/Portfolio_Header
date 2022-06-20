// Variables for the ball
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // Ball bounces off walls
	xBall += xBallChange;
	yBall += yBallChange;
	if (xBall < diameter/2 || 
      xBall > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (yBall < diameter/2 || 
      yBall > windowHeight - diameter) {
    yBallChange *= -1;
	}

  // Draw ball
	fill(0);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}