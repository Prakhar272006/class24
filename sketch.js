const Engine =  Matter.Engine
const World =  Matter.World
const Bodies =  Matter.Bodies

var engine ,world ,ball,ground; 

function setup() {
  createCanvas(1000,600);
 engine = Engine.create();
 world = engine.world

box1 = new box(700,525,50,50)
box2 = new box(850,525,50,50)
box3 = new box(700,375,50,50)
box4 = new box(850,375,50,50)
box5 = new box(775,275,50,50)

pig1 = new pig(775,525)
pig2 = new pig(775,375)

log1 = new  log(775,500,200,PI/2)
log2 = new  log(775,325,200,PI/2)
log3 = new  log(735,260,80,PI/8)
log4 = new  log(810,260,80,-PI/8)

bird1 = new bird(100,100)

ground = new Ground(width/2,height,width,25)


}

function draw() {
  background("lightblue");  

  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird1.display()
  ground.display()
}