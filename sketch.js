const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var bgs



function preload(){
bgs = loadImage("snow3.jpg")


}



function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  snow1=new Snow(200,0)
  snow2=new Snow(400,0)
  snow3=new Snow(700,0)
  snow4=new Snow(800,0)
  


}

function draw() {
  background(bgs);  
  Engine.update(engine)
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
}