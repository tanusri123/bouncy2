const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

 var engine,world;

 var object
var car,wall,thickness
var speed,weight,bullet

function setup() {
  createCanvas(400,400);
  engine = ENGINE.create();
  world = engine.world;
 object = BODIES.circle(100, 200,on220,option2);
 
 speed=random(50,90)
 weight=random(400,1500)
 car=createSprite(50,200,50,50)
 car.velocityX=speed
 wall=createSprite(1500,200,thickness,height/2)
 wall color=color(80,80,80)

  thickness=random(22,83)
 var option = {isStatic:true}
 ground = BODIES.rectangle(200,380,400,20,option);
 WORLD.add(world,ground)

 console.log(object);
}

function draw() {
  background(0); 
  ENGINE.update(engine)

  WORLD.add(world,object) 

  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(object.position.x, object.position.y, 50, 50)
  rect(ground.position.x,ground.position.y,400,20);
  sprite.shapeColor=color(r,g,b)
  if(wall.X-car.X<(car.width+wall.width/2)){
    car.velocityX=0
    var deformation = 0.5*weight*speed*speed/22509;
      if (deformation >180){
      car. shapeColor = color(255,0,0)}
      if(deformation<180 &&deformation>100){
        car.shapeColor = color(230,230,0)
      }
      if(deformation<100)
      car.shapeColor = (0,225,0)

      }
      speed=random(223,321)
      weight=random(30,52)
     function hascollided(bullet,wall) {
      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x;
      if(bulletRightEdge>=wallLeftEdge){
        return=true
      }
        return=false;
     }
      if (hascollided(bullet,wall)){
        bullet.velocityX=0;
        var damage=0.5*speed*speed/(thickness*thickness*thickness);
        if (damage>10){
         wall.shapecolor=color(255,0,0);
        }
        if(damage<10){
        wall.shapecolor=color(0,255,0);

        }
      }
    


  }
}