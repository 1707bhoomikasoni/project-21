var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(600,400);
 bullet=createSprite(10,300,20,10)
bullet.shapeColor="red"

wall=createSprite(300,300,thickness,height/2) 
wall.shapeColor="blue"

 speed=random(150,300)
 bullet.velocityX=speed;
weight=random(30,62)
thickness=random(20,80)
}

function draw() {
  background(255,255,255);  
  if(isColliding(bullet,wall)) 
  {
    bullet.velocityX=0
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(damage<10){
       wall.shapeColor="green"
     }
    
    if(damage>10){
      wall.shapeColor="red"
    }
  
  }
  drawSprites();
}
function isColliding(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width 
 wallLeftEdge=wall.x
 if(bulletRightEdge>=wallLeftEdge){
 return true
 }
 return false
 }