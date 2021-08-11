var ship;
var sea;

function preload(){

  seaImage = loadImage("sea.png");
  shipAnimation = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
 sea = createSprite(200,200,400,10);
  sea.scale = 0.40;
  sea.velocityX = -2
  sea.x = sea.width/2;
  sea.addImage("sea1" , seaImage)
  ship = createSprite(120,200,10,10);
  ship.addAnimation("sea_moving" , shipAnimation);
 ship.scale = 0.24


}

function draw() {
  background("blue")
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
  drawSprites();
 

 
}