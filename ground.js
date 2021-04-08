class Ground  {
    constructor(x,y)  {
        this.body=Matter.Bodies.rectangle(x,y,width-300,20,{isStatic:true});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        rectMode(CENTER);   
        fill("#90C71C");
        rect(this.body.position.x,this.body.position.y,width-300,20);
    }
}