var bg,bgImg
var dog1
var dog2
var dog3
var Snowball
var Snowball2
var SnowflakeImg
var Snowflake
var SnowflakeImg2
var Snowflake2


function preload(){
bgImg = loadImage("snow2.jpg")
dog_walking = loadAnimation("Dog1.png", "Dog2.png")
dogImg = loadImage("Dog3.png")
dog2Img = loadImage("Dog2.png")
dog3Img = loadImage("Dog1.png")
Snowball = loadImage("Snowball.png")
SnowBall2 = loadImage("Snowball2.png")
SnowflakeImg = loadImage("snow4.webp")
SnowflakeImg2 = loadImage("snow5.webp")
}


function setup() {
  createCanvas(800,400);
 bg = createSprite(400,50,50,50);
 bg.addImage(bgImg)

 dog = createSprite(100,300)
 dog.addImage("walking",dog3Img)
 dog.scale = 0.4

 dog.velocityX = 1
 dog.velocityY = 0.2

Snowflake = createSprite(random(500,50),50,50)
Snowflake.addImage(SnowflakeImg)
Snowflake.scale = 0.2
Snowflake.velocityY = 1

Snowflake2 = createSprite(random(600,50),50,50)
Snowflake2.addImage(SnowflakeImg2)
Snowflake2.scale = 0.2
Snowflake2.velocityY = 2

}

function draw() {
  background(255,255,255);  
 // dog.velocityX = dog.velocityX + 0.1;
 // dog.velocityY = dog.velocityY + 0.1;




 Snowball1();
  drawSprites();
}

function Snowball1(){
if(frameCount%275===0){
for(var i = 0; i < Snowball; i++){
  Snowball.push(new snow(random(0,135),random(0,50)))
}
}
}