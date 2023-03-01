function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)//allows for me to rotate certain pieces accurately in my sprite
}

function draw() {
  background(220);
  glove(0, 0)//calling the function to make the sprite
}

function glove(x, y){
  fill("brown")
  translate(200, 350)//moving it closer to the center, later will use this to follow mouseX on the x axis
  ellipse(x, y, 30, 20)//drawing the function with brown ellipses
  rotate(-40)
  ellipse(x, y - 10, 25, 10)
  
