var myEngine,myWorld,boy,boyA,b,ball,ground,backg,bg,night,score,power=0,p,plus,minus,basket1,basket2,b1,b2,time,ch=10;

function preload()  {
    backg=loadImage("bg.png");
    night=loadImage("bg2.jpg");
    boyA=loadAnimation("6.png","5.png","4.png","3.png","2.png","1.png");
    b=loadAnimation("6.png");
    p=loadImage("power.png");
    plus=loadImage("basketball_+.png");
    minus=loadImage("basketball_-.png");
    basket1=loadImage("basket_2.png");
    basket2=loadImage("basket.png");
}

function setup()   {
    createCanvas(1500,800);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(width/2-150,height-10);
    boy=new Boy(150,695,50);
    ball= new Ball(185,600);
    b1=new Basket(660,498,240,565);
    b2=new Basket(1092,633,158,295);
    bg=backg;
}

function draw()  {
    background(255);
    image(backg,0,0,1200,800);
    image(p,1200,750,100,20);
    image(plus,1310,750,20,20);
    image(minus,1360,755,20,10);
    image(basket1,450,215);
    image(basket2,950,487);
    Matter.Engine.update(myEngine);
    ground.display();
    boy.display();
    
    drawSprites();
    fill("black");
    textSize(23);
    text(power,1335,768);
    text(mouseX+","+mouseY,mouseX,mouseY);
    getTime();
}

function mouseReleased()  {
    if((mouseX>1310&&mouseX<1330)&&(mouseY>750&&mouseY<770)&&(power<10))  {
        power++;
    }
    if((mouseX>1360&&mouseX<1380)&&(mouseY>755&&mouseY<765)&&(power>0))  {
        power--;
    }
}

function keyPressed()  {
    if(keyCode==32)  {
        if(power==1)  {
            Matter.Body.setStatic(ball.body,false);
            Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-90});
            console.log("hello");
        }
        if(power>0)  {
           ball.display();
        }
    }
}

async function getTime()   {
    var response=await(await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json();
    var time=Number(response.datetime.slice(11,13));
    if(time>5&&time<=17)  {
        bg=backg;
    }
    else  {
        bg=night;
    }
}