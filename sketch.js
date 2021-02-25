
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,70);
	
	bob1 = new Bob(400,400,50);
	bob2 = new Bob(500,400,50);
	bob3 = new Bob(600,400,50);
	bob4 = new Bob(300,400,50);
	bob5 = new Bob(200,400,50);

	rope1 = new Rope(bob1.body,roof.body,0,-50);
	rope2 = new Rope(bob2.body,roof.body,100,-50);
	rope3 = new Rope(bob3.body,roof.body,200,-50);
	rope4 = new Rope(bob4.body,roof.body,-100,-50);
	rope5 = new Rope(bob5.body,roof.body,-200,-50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyPressed()){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:200,y:0});
  }

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		keyCode = 1;
		return true;
	}
}


