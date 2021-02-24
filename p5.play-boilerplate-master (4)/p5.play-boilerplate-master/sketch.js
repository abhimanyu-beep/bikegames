var bike1,bike1Image;
var bike2,bike2Image;
var stone,stoneimage
var obstaclesgroup;
var score = 0;
var bg,bgImage

function  preload(){
  bike1Image = loadImage("bike1.png")
  bike2Image  =loadImage("bike2.png")
  stoneimage  =loadImage("stone.png")
  bgImage  =loadImage("bg1.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(800,400,20,20)
  bg.addImage(bgImage)
  bg.scale = 2

  bike1 = createSprite(400, 200, 50, 50);
  bike1.addImage(bike1Image)
  //bike1.velocityX = 5
  bike1.scale = 0.2


  bike2 = createSprite(300,200,50,50)
  bike2.addImage(bike2Image)
  //bike2.velocityX  =5
  bike2.scale = 0.2

  


obstaclesgroup = createGroup();
  

}

function draw() {
  background(255,255,255);  

  
  if(keyDown(UP_ARROW)){
    bike1.x = bike1.x -5
  }
  if(keyDown(DOWN_ARROW)){
    bike2.x  =bike2.x -5
  }

  if(obstaclesgroup.isTouching(bike1)){
    bike1.destroy()
    score = score+1
  }
  if(obstaclesgroup.isTouching(bike2)){
    bike2.destroy()
    score = score+1
  }



 stones();

  drawSprites();

  text("Score:"+score,30,20)

}


function stones(){
  if(frameCount % 100===0){
    stone = createSprite(800,100,40,40)
    stone.y = Math.round(random(0,400))
    stone.addImage(stoneimage)
    stone.velocityX = -5
    stone.scale = 0.08

    
    obstaclesgroup.add(stone)
  }
}