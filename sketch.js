
var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(600,400,80,30);
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }
  
 

  drawSprites();
}