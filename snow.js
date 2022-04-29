class Snow{
    constructor(x,y){
        var options={
            friction:1,
            density:0.05

        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("snow4.webp")
        this.width=50
        this.height=50
        World.add(world,this.body)
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}