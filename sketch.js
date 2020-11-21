
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function preload()
{	
	
}
function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  paper= new Paper(200,630,20);

  boxPosition=width/2-100, boxY=610;

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

  boxleftSprite=createSprite(1000, boxY, 20,100);
  boxleftSprite.shapeColor=color(255,0,0);
   boxLeftBody = Bodies.rectangle(100, boxY, 20,100 , {isStatic:true} );
   World.add(world, boxLeftBody);

   boxBase=createSprite(1100, boxY+40, 200,20);
   boxBase.shapeColor=color(255,0,0);
   boxBottomBody = Bodies.rectangle(1100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxrightSprite=createSprite(1200 , boxY, 20,100);
   boxrightSprite.shapeColor=color(255,0,0);
    boxRightBody = Bodies.rectangle(1200, boxY, 20,100 , {isStatic:true} );
   World.add(world, boxRightBody);

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
  drawSprites();
 
}function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
  }
}