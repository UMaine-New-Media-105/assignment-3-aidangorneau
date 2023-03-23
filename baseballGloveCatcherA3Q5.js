let num = 0; //starting variable for the score
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  groundY = 350; //states where the ground is ball can detect it
  gloveH = 30;
  gloveX = mouseX; //glove follows mouse x position
  ballY = 0; //ball starting position
  ballFalling = false; //boolean variable to detect if the ball is falling or not
  catchBall = false; //boolean variable to detect if the ball is touching the glove or not
  ballX = random(25, 375); //spawns the ball at a random x value
}

function draw() {
  background(0, 150, 200);
  push();
  noStroke();
  fill("green");
  rect(0, 350, 400, 50); //ground
  fill("black");
  textSize(32);
  text("score:", 10, 30); //text that says score
  text(nf(num, 2, 0), 100, 30); //text with the score variable that changes when you catch the ball
  pop();

  if (ballFalling) {
    //checks boolean variable if true
    ball(ballX, ballY); //calls the ball function and puts it at ball x and ball y
    ballY = ballY + speed; //moves the ball down the screen at a certain speed
  }

  if (ballY > groundY) {
    //checks if ball is touching ground or not
    ballFalling = false; //changes boolean variable
    if (!catchBall) {//if the ball is not caught, 
      num = num - 2;//lower the score by 2
      ballY = 0;//move the ball back to the top 
    } else {
      ballY = 0; //moves ball back to the top of the screen when not falling
    }
  }

  let d = dist(mouseX, groundY, ballX, ballY); //calculates the distance of the glove to the ball
  if (d < 26) {
    //if the glove is within 26 pixels from the ball, do this
    catchBall = true;
    num = num + 1; //increases the score when the ball is caught
    glove(0, 0, -20, 25, "yellow"); //changes the animation to show the glove catching the ball, and changes the color
  } else {
    catchBall = false;
    glove(0, 0, -40, 30, "brown"); //calls in the normal animation for the glove
  }
}
function mousePressed() {
  if (!ballFalling) {
    //checks if ball is not falling, then sets it to true when mouse is pressed
    ballFalling = true; //changes boolean variable
    ballX = random(25, 375); //puts the ball at a random x value
    speed = random(10, 15); //sets the ball speed to a random speed each new time the ball spawns in
  }
}

function glove(gloveX, groundY, rotat, size, color) {
  //makes the glove sprite
  push();
  fill(color);
  translate(mouseX, 350); //moves the glove to the mouse x position
  ellipse(gloveX, groundY, size, 20); //draws the glove sprite
  rotate(rotat);
  ellipse(gloveX, groundY - 10, 25, 10);
  pop();
}
function ball(ballX, ballY) {
  //draws the ball sprite
  push();
  fill("white");
  ellipse(ballX, ballY, 20);
  fill("red");
  rect(ballX - 2.5, ballY - 9, 2, 20);
  pop();
}
