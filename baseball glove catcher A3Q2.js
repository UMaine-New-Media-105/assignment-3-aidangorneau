
function setup()  {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  
}

function draw() {
  background(0, 150, 200);
  push()
  noStroke()
  fill('green')
  rect(0, 350, 400, 50)
  pop()
  //this draws the green strip at the bottom
  if (mouseIsPressed){
    glove(0, 0, -20, 25)//this is the changed glove when the mouse is pressed, making the glove look like it is being squeezed
  }else{
    glove(0, 0, -40, 30)//this is the normal glove without the mouse being pressed
  }
  
}


function glove(x, y, rotat, size){
  fill("brown")
  translate(mouseX, 350)
  ellipse(x, y, size, 20)
  rotate(rotat)
  ellipse(x, y - 10, 25, 10)
  //this function draws the glove and uses the variables rotat and size to change the gloves appearance when the mouse is pressed above
}
