const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

   var ball_options={
    restitution: 1
   } 
   ball=Bodies.circle(200,300,50,ball_options);
   World.add(world,ball);

   box1=new Box(200,200,50,50); 
   box2=new Box(100,200,50,50);
   box3=new Box(250,200,50,50); 
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
    box1.display()
    box2.display()
    box3.display()
}