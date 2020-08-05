const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var trashcan;
var paper;
var launcher;

function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1600/2,670,1600,20);
  
  trashcan = new dustbin(1200,650);

  paper = new Paper(200,550,60);
  
  launcher = new Launcher(paper.body,{x:100, y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  Engine.update(engine);
  ground.display();
  trashcan.display();
  paper.display();
  launcher.display();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  launcher.fly();
}
