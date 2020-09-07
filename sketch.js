const Engine = Matter.Engine;
const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
 var divisions = [];
var particles = [];
var plinkos = [];

var particle;

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions = new Divisions(k, height-divisionHeight/2, 10, divisionHeight);
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos = new Plinko(j,75);
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos = new Plinko(j,175);
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos = new Plinko(j,275);
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos = new Plinko(j,375);
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  divisions.display();
  plinkos.display();
  particle.display();
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles = new Particle(random(width/2-30, width/2+30), 10,10);
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle != null) {
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score + 500;
         particle = null;
         
       }
     }
   }
   if(turn = 5){
     gameState = "end";
    text("GAME OVER ",200,200);
   }
  

}

function mousePressed(){
  if(gameState !== "end"){
    score++;
    particles = new Particle(mouseX,10,10,10);
  }
}