class Drops
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 5;
        var options = {
            isStatic:false,
            'friction':0.4,
            'density': 0.5
        };
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r*3);
        
        rotate(angle);
        pop();
    }

    update()
    {   var pos = this.body.position;
        if(pos.y>height)
        {
            Matter.Body.setPosition(this.body, {x:random(0,width),y:0} );
        }
    }
}