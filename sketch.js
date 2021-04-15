var emma, granger;

function setup() {
  createCanvas(800,400);
  emma = createSprite(400, 200, 50, 50);
  emma.shapeColor = "blue";

  granger = createSprite(300,390, 50, 50);
  granger.shapeColor = "aqua";
}

function draw() {
  background("pink");
  
  granger.x = mouseX;
  granger.y = mouseY;

  if (granger.x - emma.x < granger.width/2 + emma.width/2 
    && emma.x - granger.x < granger.width/2 + emma.width/2 
    && emma.y - granger.y < emma.height/2 + granger.height/2
    && granger.y - emma.y < emma.height/2 + granger.height/2 ) {
    emma.shapeColor = "yellow";
    granger.shapeColor = "green";
  }

  else {
    emma.shapeColor = "blue";
    granger.shapeColor = "aqua";
  }
  drawSprites();
}