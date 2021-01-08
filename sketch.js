const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var divisions = [];
var particle;
var plinkos = [];
var divisionHeight = 300;
var gameState = "play";
var score = 0;
var turn = 0;
var textX = 50;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);
  if(divisions){
  for(var i = 0; i<= width; i+=80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
}
  if(plinkos){
  for(var l = 40; l<=width; l+=50){
    plinkos.push(new Plinko(l,75));
  }

  for(var l = 15; l<=width-10; l+=50){
    plinkos.push(new Plinko(l,175));
  }
  for(var l = 40; l<= width;l+=50){
    plinkos.push(new Plinko(l,275));
  }
  for(var l = 15; l<= width-10;l+=50){
    plinkos.push(new Plinko(l,375));
  }
}
}
  

function draw() {
  background(0);  
  Engine.update(engine);
  if(divisions){
    for (var i = 0; i<divisions.length;i++){
      divisions[i].display();
    }
  }

  ground.display();

  if(plinkos){
    for(var l = 0; l<plinkos.length; l++){
    plinkos[l].display();
    }
  }
  fill(255,255,225);
  stroke("gold");
  textSize(20);
  text("Score: "+ score,textX,30);
  text("400",textX-30,550);
  text("200",textX+55,550);
  text("100",textX+130,550);
  text("100",textX+210,550);
  text("200",textX+295,550);
  text("400",textX+375,550);
  if(particle!=null){
    particle.display();
    if (turn>= 5){
      gameState ="end";
    }
    if(particle.body.position.y>700){
      if(particle.body.position.x<80&&particle.body.position.x>0){
        score+=400;
        particle = null;
      }else if(particle.body.position.x<160&&particle.body.position.x>80){
        score+=200;
        particle = null;
      }else if(particle.body.position.x<240&&particle.body.position.x>160){
        score+=100;
        particle = null;
      }else if(particle.body.position.x<320&&particle.body.position.x>240){
        score+=100;
        particle = null;
      }else if(particle.body.position.x<400&&particle.body.position.x>320){
        score+=200;
        particle = null;
      }else if(particle.body.position.x<480&&particle.body.position.x>400){
        score+=400;
        particle = null;
      }else if(particle.body.position.x<0){
        particle = null;
      }
    }
  } 
  if(gameState === "end"&&particle === null){
    plinkos = null;
    divisions = null;

    textX = -1000;
    textSize(40);
    stroke("white");
    fill("white");
    text("Game Over",160,100);
    if(score<2000&&score>800){
      textSize(25);
      fill("green");
      stroke("green");
      text("You achieved a score of "+score,100,600);
      text("Nice but not the best...",120,300)
    }

    if(score<=800&&score>0){
      fill("grey");
      stroke("grey");
      text("You achieved a score of "+score,100,600);
      text("You can do better...",130,300);
    }
    
    if(score === 2000){
      stroke("gold");
      textSize(25);
      text("supercalifragilisticexpialidocious",60,300)
      textSize(19);
      text("You have achieved the maximum score of "+score,50,600)
    }

    if(score === 0){
      fill("red");
      stroke("red");
      textSize(30);
      text("...Better luck next time",100,300);
      fill("red");
      stroke("red");
      text("You achieved a score of "+score,100,600);
    }
  }
}


function mousePressed(){

  if(gameState!=="end"){
    particle = new Particle(mouseX,15,15);
    turn++;
  }

}