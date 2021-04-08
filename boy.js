class Boy   {
    constructor(x,y,r)  {
        this.rad=r;
        this.body=Matter.Bodies.circle(x,y,this.rad,{isStatic:true});
        Matter.World.add(myWorld,this.body);
        this.boy=createSprite(150,695);
        this.boy.addAnimation("still",b);
        this.boy.scale=0.6;
    }
    display()  {
        drawSprites();
    }
}