var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityY=5;
  fixedRect.velocityY=-5;
}

function draw() {
  if(   movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    &&  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    &&  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    &&  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2  ){

         movingRect.shapeColor="red";
        fixedRect.shapeColor="blue";
  }
  else{
        movingRect.shapeColor="green";
       fixedRect.shapeColor="green";
  }
  //console.log(movingRect.x-fixedRect.x);
  background("pink"); 
  if(   movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    &&  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityX = movingRect.velocityX *(-1);
        fixedRect.velocityX = fixedRect.velocityX *(-1);
    }
    if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    &&  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) 
    
    {
        movingRect.velocityY =movingRect.velocityY *(-1);
        fixedRect.velocityY =fixedRect.velocityY *(-1); 
    }
      
//movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;
  drawSprites();
}