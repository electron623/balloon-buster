var blueBalloon,blueBalloonImage;
var bow,bowImage;
var arrow;
var bg,bgImage;
var greenBalloon,greenBalloonImage;
var redBalloon,redBalloonImage;
function preload(){
 //load your images here 
 bowImage = loadImage("bow0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
bgImage = loadImage("background0.png")
greenBalloonImage = loadImage("green_balloon0.png");
  redBalloonImage = loadImage("red_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
  
  bg = createSprite(0,0,600,600);
  bg.addImage(bgImage);
  bg.scale = 2.5;
  //add code here
 bow = createSprite(450,200,10,40);
  bow.addImage(bowImage);
 for(var i = 60;i<390;i = i+60){
  blueBalloon = createSprite(60,i,10,20);
   
   blueBalloon.addImage(blueBalloonImage);
   blueBalloon.scale = 0.1;
    
 }
  for(var i =120;i<350;i = i+60){
  greenBalloon = createSprite(130,i,10,20);
  
  greenBalloon.addImage(greenBalloonImage);
  greenBalloon.scale = 0.1;
}
   for(var i =200;i<320;i = i+60){
 redBalloon = createSprite(200,i,10,20);
  
  redBalloon.addImage(redBalloonImage);
  redBalloon.scale = 0.1;
} 
}
function draw() {
  
  bg.velocityX = -6;
  if(bg.x<0){
    bg.x = bg.width/2;
    
  }
  
bow.y = World.mouseY;
  //ad code here
  drawSprites();
}