
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  groundY = 350; //states where the ground is ball can detect it
  gloveX = mouseX; //glove follows mouse x position
  ballY = 0; //ball starting position
  ballFalling = false; //boolean variable to detect if the ball is falling or not
  ballX = random(25, 375); //spawns the ball at a random x value
}

function draw() {
  background(0, 150, 200);
  push();
  noStroke();
  fill("green");
  rect(0, 350, 400, 50); //ground
  pop();
  if (ballFalling) {
    //checks boolean variable if true
    ball(ballX, ballY); //calls the ball function and puts it at ball x and ball y
    ballY = ballY + speed; //moves the ball down the screen at a certain speed
  }
  if (mouseIsPressed){
    glove(gloveX, groundY, -20, 25)//this is the changed glove when the mouse is pressed, making the glove look like it is being squeezed
  }else{
    glove(gloveX, groundY, -40, 30)//this is the normal glove without the mouse being pressed
  }

  if (ballY > groundY) {
    //checks if ball is touching ground or not
    ballFalling = false; //changes boolean variable
    ballY = 0; //moves ball back to the top of the screen when not falling
  }
}
function mousePressed() {
  if (!ballFalling) {
    //checks if ball is not falling, then sets it to true when mouse is pressed
    ballFalling = true; //changes boolean variable
    ballX = random(25, 375); //puts the ball at a random x value
    speed = random(5, 10); //sets the ball speed to a random speed each new time the ball spawns in
  }
}

function glove(gloveX, groundY, rotat, size) {
  //makes the glove sprite
  push();
  fill("brown");
  translate(mouseX, groundY); //moves the glove to the mouse x position
  ellipse(0, 0, size, 20); //draws the glove sprite
  rotate(rotat);
  ellipse(0, -9, 25, 10);
  pop();
}

function ball(ballX, ballY) {//sets variable positions for the ball when it is called to a random x position or the top of canvas
  //draws the ball sprite
  push();
  fill("white");
  ellipse(ballX, ballY, 20);
  fill("red");
  rect(ballX - 1, ballY - 9, 2, 20);
  pop();
}
