var john , bground ;
var bg,johnImg ; 
var edges ;
var boulder,boulderImg ; 

function preload () {
bg = loadImage("Bg.jpg");
johnImg = loadAnimation("John_1.png",'John_2.png');
//boulderImg = loadImage("boulder_image.png");

}
function setup() {
  createCanvas(400,400);

  bground = createSprite(0,0,400,400);
  bground.addImage(bg);
  bground.velocityX = -2;
  bground.x= bground.width/2;

  john =  createSprite(30, 370, 20, 20);
  //john.addAnimation
  

   
}
function draw() {
  background(0); 

  //ground.velocityX = -3 ;
  console.log(john.y);
  if (bground.x<0) {

    bground.x= bground.width/2;
  }

  if (keyDown("UP_ARROW") && john.y>=344){
    john.velocityY=-10;
  }

  john.velocityY = john.velocityY+0.5;

  edges = createEdgeSprites();
  john.collide(edges[3]);

  spawnBoulder();
  drawSprites();
}

function spawnBoulder () {
  if(frameCount % 60 === 0){
    boulder = createSprite(400 ,320 , 40 ,10);
    //boulder.addImage(boulderImg);
    boulder.velocityX = -3;
  
  }
  

  
}
