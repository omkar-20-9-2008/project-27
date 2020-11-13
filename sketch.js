
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(210,600,70);	
	bobObject2 = new Bob(280,600,70);
	bobObject3 = new Bob(350,600,70);
	bobObject4 = new Bob(420,600,70);
	bobObject5 = new Bob(490,600,70);

	roof = new Roof(350,200,600,50);

	rope1 = new Rope({x:210, y:200},bobObject1.body)
	rope2 = new Rope({x:280, y:200},bobObject2.body)
	rope3 = new Rope({x:350, y:200},bobObject3.body)
	rope4 = new Rope({x:420, y:200},bobObject4.body)
	rope5 = new Rope({x:490, y:200},bobObject5.body)


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(500);

  roof.display();

  rope1.display();
  rope2.display();  
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	
if(keyCode === UP_ARROW)

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:500});

}

