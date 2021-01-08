
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var divisionHeight = 300;
var division = [];
var plinkos = [];
var particles = [];
var plinko;
function setup(){
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,155,10));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,235,10));
    }

     for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,315,10));
    }

}

  

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%57===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
}
