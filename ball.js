class Ball  {
    constructor(x,y)  {
        this.body=Matter.Bodies.circle(x,y,15,{isStatic:false});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        ellipse(this.body.position.x,this.body.position.y,30,30);
    }
}