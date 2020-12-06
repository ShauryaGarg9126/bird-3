
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground,groundImg;
var bird,birdImg;
var pillar1,pillarImg,pillar2;
var score=0;

function preload()
{
groundImg=loadImage("background.png");
birdImg=loadImage("bird.png");	
pillarImg=loadImage("pillar.png");
}

function setup() {

ground=createSprite(0,0,1500,600);
ground.velocityX=-5;
ground.addImage(groundImg);
ground.scale=13;

bird=createSprite(200,300,20,20);
bird.addImage(birdImg);
bird.scale=0.8;
bird.velocityX=10;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
	createCanvas(1500,600)
	background("black");
	
	fill("black");
  strokeWeight(2);
  textSize(10);
  score = score + Math.round(frameCount/60);
  text("Score : " + score,1500,600);
	camera.position.x = displayWidth/2;
	camera.position.y = bird.y;
	
	if(bird.y <0)
	{
	bird.y= 100;
	}

	if(gameState==PLAY){

	
	
	if(ground.x<0){
		ground.x=ground.width/2;
	}
	for (var i =0;i<10;i=i+4){
		pillar1=createSprite(100*i+500,500,10,10);
	pillar1.scale=0.37;
	
		pillar1.addImage(pillarImg);
	
	  }
	  for (var i =0;i<10;i=i+4){
		pillar2=createSprite(110*i+700,30,10,10);
	pillar2.scale=0.37;
		pillar2.addImage(pillarImg);
	

	  }
	  if(keyDown("UP_ARROW")) {
        bird.velocityY = -12;
       
    }
	if(keyDown("DOWN_ARROW")) {
        bird.velocityY = 12;
       
    }
	}
	if(bird.isTouching(pillar1)|| (bird.isTouching(pillar2))){

		gameState==END;
	}
	if(gameState==END){
		bird.visible=false;
		pillar1.visible=false;
		fill(black);
		textSize(20);
		text("GAMEOVER PRESS REFRESH TO PLAY AGAIN",750,300);
	}
	
  rectMode(CENTER);  
  drawSprites();
 
}



